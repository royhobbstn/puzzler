import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Comlink from 'comlink';
import Worker from '../worker/index.js';
import { submitResult } from '../personalBests';
import { constructTest } from '../util';
import { inventory } from '../data/inventory';
import { startRunningTests, concludeRunningTests, noLongerTesting } from './gameStore';
import { RootState } from '../index';

export interface EvalWorker {
  evaluate: EvalFunc;
}

interface EvalFunc {
  (source: string): string;
}

const MAX_EXECUTION_TIME = 2000; // 2 second max execution time

export const clickRun = createAsyncThunk<
  any,
  string,
  {
    state: RootState;
  }
>('', async (id: string, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
  const value = state.game.value;
  const data = inventory[id];

  thunkAPI.dispatch(startRunningTests());

  // for each test
  const promisedResults = data.testCases.map(async test => {
    // run sandbox code in a worker
    const worker = new Worker();
    const obj: Comlink.Remote<EvalWorker> = Comlink.wrap(worker);
    let error = '';
    const response = obj
      .evaluate(
        value +
          data.setupCode +
          constructTest(data.testCases, test.inherit, test.code, test.evaluate, '').test,
      )
      .catch((e: Error) => {
        error = e.message;
      });
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, MAX_EXECUTION_TIME, new Error('Timeout'));
    }).catch(e => {
      error = e.message;
    });
    const val = await Promise.race([response, timeout]);
    obj[Comlink.releaseProxy]();
    worker.terminate();

    // update test result
    let representation: string | boolean | number = '';
    if (typeof val === 'object' && val != null) {
      representation = JSON.stringify(val);
    } else if (typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number') {
      representation = val;
    } else {
      throw new Error('unexpected');
    }

    // determine if actual === expected
    const ok = test.expected === representation && !error;

    // format for display in table
    const presentation =
      typeof representation !== 'string' ? JSON.stringify(representation) : representation;

    return { ...test, actual: presentation, error, ok };
  });

  await Promise.all(promisedResults)
    .then(r => {
      const entry = { id, seconds: state.game.totalSeconds };
      thunkAPI.dispatch(concludeRunningTests({ r, entry }));
      submitResult(entry);
    })
    .finally(() => {
      thunkAPI.dispatch(noLongerTesting());
    });
});
