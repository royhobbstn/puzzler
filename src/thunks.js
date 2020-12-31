import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker';
import { submitResult } from './personalBests.js';
import { constructTest } from './util.js';

import {
  setResults,
  setActiveIndex,
  setIsBusyTesting,
  setRevealButtonPressed,
  setValue,
  setValue2,
  setSessionHistory,
} from './gameStore.js';

import { setSelections } from './filterStore.js';

export const clickRun = createAsyncThunk('', async (propRefs, thunkAPI) => {
  const state = thunkAPI.getState();
  const value = state.game.value;
  const revealButtonPressed = state.game.revealButtonPressed;
  const id = propRefs.current.id;
  const data = propRefs.current.data;

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
      propRefs.current.pause();
      const entry = { id, seconds: state.game.totalSeconds };
      thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
      submitResult(entry);
      thunkAPI.dispatch(setRevealButtonPressed(true));
    }
  });
});

export const clickNextToResults = createAsyncThunk('', async (propRefs, thunkAPI) => {
  console.log('clickNextToResults');
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  propRefs.current.reset();
  sessionStorage.setItem('savedSeconds', 0);
  // hack to make sure the sessionStorage state is updated fully before navigating away from component
  window.setTimeout(() => {
    propRefs.current.history.push(`/sessionStats`);
  }, 1);
});

export const clickNext = createAsyncThunk('', async (propRefs, thunkAPI) => {
  if (propRefs.current.reset && propRefs.current.start) {
    propRefs.current.reset();
    propRefs.current.start();
  }
  sessionStorage.setItem('savedSeconds', 0);
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  const state = thunkAPI.getState();
  const selections = [...state.filter.selections];
  const id = selections.shift();
  thunkAPI.dispatch(setSelections(selections));
  propRefs.current.history.push(`/${id}`);
});

export const clickSkip = createAsyncThunk('', async (propRefs, thunkAPI) => {
  const state = thunkAPI.getState();
  const revealButtonPressed = state.game.revealButtonPressed;
  if (!revealButtonPressed) {
    const entry = { id: propRefs.current.id, seconds: null };
    thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
  }
  propRefs.current.reset();
  sessionStorage.setItem('savedSeconds', 0);
  propRefs.current.start();
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  const selections = [...state.filter.selections];
  const id = selections.shift();
  thunkAPI.dispatch(setSelections(selections));
  propRefs.current.history.push(`/${id}`);
});

export const clickSkipToResults = createAsyncThunk('', async (propRefs, thunkAPI) => {
  const state = thunkAPI.getState();
  const revealButtonPressed = state.game.revealButtonPressed;
  if (!revealButtonPressed) {
    const entry = { id: propRefs.current.id, seconds: null };
    thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
  }
  propRefs.current.reset();
  sessionStorage.setItem('savedSeconds', 0);
  propRefs.current.start();
  thunkAPI.dispatch(setRevealButtonPressed(false));
  thunkAPI.dispatch(setActiveIndex(0));
  thunkAPI.dispatch(setValue(''));
  thunkAPI.dispatch(setResults([]));
  // hack to make sure the sessionStorage state is updated fully before navigating away from component
  window.setTimeout(() => {
    propRefs.current.history.push(`/sessionStats`);
  }, 1);
});

export const revealAnswer = createAsyncThunk('', async (propRefs, thunkAPI) => {
  const state = thunkAPI.getState();
  const data = propRefs.current.data;
  thunkAPI.dispatch(setRevealButtonPressed(true));
  propRefs.current.pause();
  const entry = { id: propRefs.current.id, seconds: null };
  thunkAPI.dispatch(setSessionHistory([...state.game.sessionHistory, entry]));
  // code to reveal
  const transform = data.solution.solutionLines.map(line => {
    return line.text;
  });
  thunkAPI.dispatch(setValue2(transform.join('\n')));
});
