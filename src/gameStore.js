import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    value: '',
    value2: '',
    results: [],
    revealButtonPressed: false,
    isBusyTesting: false,
    activeIndex: 0,
    totalSeconds: 0,
  },
  reducers: {
    setValue: (state, { type, payload }) => {
      state.value = payload;
    },
    setValue2: (state, { type, payload }) => {
      state.value2 = payload;
    },
    setResults: (state, { type, payload }) => {
      state.results = payload;
    },
    setRevealButtonPressed: (state, { type, payload }) => {
      state.revealButtonPressed = payload;
    },
    setIsBusyTesting: (state, { type, payload }) => {
      state.setIsBusyTesting = payload;
    },
    setActiveIndex: (state, { type, payload }) => {
      state.activeIndex = payload;
    },
    setTotalSeconds: (state, { type, payload }) => {
      state.totalSeconds = payload;
    },
    /////
    //
  },
});

export const {
  setValue,
  setValue2,
  setResults,
  setRevealButtonPressed,
  setIsBusyTesting,
  setActiveIndex,
  setTotalSeconds,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
