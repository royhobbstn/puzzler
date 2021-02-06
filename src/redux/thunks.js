import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!../worker';
import { submitResult } from '../personalBests.js';
import { constructTest } from '../util.js';
import { inventory } from '../data/inventory';
import { startRunningTests, concludeRunningTests } from './gameStore.js';

export const clickRun = createAsyncThunk('', async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const value = state.game.value;
  const data = inventory[id];

  thunkAPI.dispatch(startRunningTests());

  // for each test
  const promisedResults = data.testCases.map(async test => {
    // run sandbox code in a worker
    const worker = new Worker();
    const obj = Comlink.wrap(worker);
    let error = '';
    const response = obj
      .evaluate(
        value +
          data.setupCode +
          constructTest(data.testCases, test.inherit, test.code, test.evaluate, '').test,
      )
      .catch(e => {
        error = e.message;
      });
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, data.maxExecutionTime * 1000, new Error('Timeout'));
    }).catch(e => {
      error = e.message;
    });
    const val = await Promise.race([response, timeout]);
    obj[Comlink.releaseProxy]();
    worker.terminate();

    // update test result
    let representation = '';
    if (typeof val === 'object' && val != null) {
      representation = JSON.stringify(val);
    } else {
      representation = val;
    }

    // determine if actual === expected
    const ok = test.expected === representation;

    // format for display in table
    const presentation =
      typeof representation !== 'string' ? JSON.stringify(representation) : representation;

    return { ...test, actual: presentation, error, ok };
  });

  await Promise.all(promisedResults).then(r => {
    const entry = { id, seconds: state.game.totalSeconds };
    thunkAPI.dispatch(concludeRunningTests({ r, entry }));
    submitResult(entry);
  });
});
