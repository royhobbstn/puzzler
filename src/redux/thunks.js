import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!../worker';
import { submitResult } from '../personalBests.js';
import { constructTest } from '../util.js';
import { inventory } from '../data/inventory';
import {
  setResults,
  setActiveIndex,
  setIsBusyTesting,
  setRevealButtonPressed,
  setValue,
  setValue2,
  setSessionHistory,
  setIsRunning,
  setTotalSeconds,
} from './gameStore.js';

import { setSelections } from './filterStore.js';

export const clickRun = createAsyncThunk('', async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const value = state.game.value;
  const revealButtonPressed = state.game.revealButtonPressed;
  const data = inventory[id];

  thunkAPI.dispatch(setResults([]));
  thunkAPI.dispatch(setActiveIndex(1));
  thunkAPI.dispatch(setIsBusyTesting(true));

  // for each test
  const promisedResults = data.testCases.map(async test => {
    // run sandbox code in a worker
    const worker = new Worker();
    const obj = Comlink.wrap(worker);
    let error = '';
    const response = obj
      .evaluate(value + constructTest(data.testCases, test.inherit, test.code, test.evaluate))
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
    if (typeof val === 'object') {
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
    const state = thunkAPI.getState();

    thunkAPI.dispatch(setResults(r));
    thunkAPI.dispatch(setIsBusyTesting(false));

    if (r.every(d => d.ok) && !revealButtonPressed) {
      thunkAPI.dispatch(setIsRunning(false));
      const entry = { id, seconds: state.game.totalSeconds };
      thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
      submitResult(entry);
      thunkAPI.dispatch(setRevealButtonPressed(true));
    }
  });
});

export const clickNextToResults = createAsyncThunk('', async (obj, thunkAPI) => {
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  thunkAPI.dispatch(setTotalSeconds(0));
  thunkAPI.dispatch(setIsRunning(false));
});

export const clickNext = createAsyncThunk('', async (obj, thunkAPI) => {
  thunkAPI.dispatch(setTotalSeconds(0));
  thunkAPI.dispatch(setIsRunning(true));
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  const state = thunkAPI.getState();
  const selections = [...state.filter.selections];
  const nextId = selections.shift();
  thunkAPI.dispatch(setSelections(selections));
  return nextId;
});

export const clickSkip = createAsyncThunk('', async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const revealButtonPressed = state.game.revealButtonPressed;
  if (!revealButtonPressed) {
    const entry = { id, seconds: null };
    thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
  }
  thunkAPI.dispatch(setTotalSeconds(0));
  thunkAPI.dispatch(setIsRunning(true));
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  const selections = [...state.filter.selections];
  const nextId = selections.shift();
  thunkAPI.dispatch(setSelections(selections));
  return nextId;
});

export const clickSkipToResults = createAsyncThunk('', async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const revealButtonPressed = state.game.revealButtonPressed;
  if (!revealButtonPressed) {
    const entry = { id, seconds: null };
    thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
  }
  thunkAPI.dispatch(setTotalSeconds(0));
  thunkAPI.dispatch(setIsRunning(false));
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
});

export const revealAnswer = createAsyncThunk('', async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const data = state.game.data;
  thunkAPI.dispatch(setRevealButtonPressed(true));
  thunkAPI.dispatch(setIsRunning(false));
  const entry = { id, seconds: null };
  thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
  // code to reveal
  const transform = data.solution.solutionLines.map(line => {
    return line.text;
  });
  thunkAPI.dispatch(setValue2(transform.join('\n')));
});
