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
    isRunning: false,
    open: false,
    noteCode: '',
    tableSort: 'id', // id | fail | success
    sessionHistory: [],
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
    setOpen: (state, { type, payload }) => {
      state.open = payload;
    },
    setNoteCode: (state, { type, payload }) => {
      state.noteCode = payload;
    },
    updateTableSort: (state, { type, payload }) => {
      state.tableSort = payload;
    },
    setSessionHistory: (state, { type, payload }) => {
      state.sessionHistory = payload;
    },
    incrementTotalSeconds: (state, { type, payload }) => {
      state.totalSeconds = state.totalSeconds + 1;
    },
    setIsRunning: (state, { type, payload }) => {
      state.isRunning = payload;
    },
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
  setOpen,
  setNoteCode,
  updateTableSort,
  setSessionHistory,
  incrementTotalSeconds,
  setIsRunning,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
