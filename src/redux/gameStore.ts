import { createSlice } from '@reduxjs/toolkit';
import { TestCase, Problem } from '../data/interface';
import { SessionHistoryEntry } from '../SessionStats';

interface GameState {
  value: string;
  value2: string;
  results: TestCase[];
  revealButtonPressed: boolean;
  isBusyTesting: boolean;
  activeIndex: number;
  totalSeconds: number;
  isRunning: boolean;
  open: boolean;
  noteCode: string;
  tableSort: 'id' | 'fail' | 'success';
  sessionHistory: SessionHistoryEntry[];
}

const initialState: GameState = {
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
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
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
    incrementTotalSeconds: state => {
      state.totalSeconds = state.totalSeconds + 1;
    },
    setIsRunning: (state, { type, payload }) => {
      state.isRunning = payload;
    },
    startRunningTests: state => {
      state.results = [];
      state.activeIndex = 1;
      state.isBusyTesting = true;
    },
    concludeRunningTests: (state, { type, payload }) => {
      const { r, entry } = payload;
      state.results = r;
      state.isBusyTesting = false;
      if (r.every((d: TestCase) => d.ok) && !state.revealButtonPressed) {
        state.isRunning = false;
        state.sessionHistory.push(entry);
        state.revealButtonPressed = true;
      }
    },
    clickNextToResults: state => {
      state.totalSeconds = 0;
      state.isRunning = false;
      state.revealButtonPressed = false;
      state.activeIndex = 0;
      state.value = '';
      state.results = [];
    },
    clickSkipToResults: (state, { type, payload }) => {
      const id = payload;
      if (!state.revealButtonPressed) {
        state.sessionHistory.push({ id, seconds: 0 });
      }
      state.totalSeconds = 0;
      state.isRunning = false;
      state.revealButtonPressed = false;
      state.activeIndex = 0;
      state.value = '';
      state.results = [];
    },
    clickNext: state => {
      state.totalSeconds = 0;
      state.isRunning = true;
      state.revealButtonPressed = false;
      state.activeIndex = 0;
      state.value = '';
      state.results = [];
    },
    clickSkip: (state, { type, payload }) => {
      const id = payload;
      if (!state.revealButtonPressed) {
        state.sessionHistory.push({ id, seconds: 0 });
      }
      state.totalSeconds = 0;
      state.isRunning = true;
      state.revealButtonPressed = false;
      state.activeIndex = 0;
      state.value = '';
      state.results = [];
    },
    revealAnswer: (state, { type, payload }) => {
      const { id, data }: { id: string; data: Problem } = payload;
      state.revealButtonPressed = true;
      state.isRunning = false;
      state.sessionHistory.push({ id, seconds: 0 });
      // code to reveal
      state.value2 = data.solution
        .map(line => {
          return line.text;
        })
        .join('\n');
    },
  },
});

export const {
  setValue,
  setValue2,
  setResults,
  setRevealButtonPressed,
  setActiveIndex,
  setTotalSeconds,
  setOpen,
  setNoteCode,
  updateTableSort,
  setSessionHistory,
  incrementTotalSeconds,
  setIsRunning,
  startRunningTests,
  concludeRunningTests,
  clickNextToResults,
  clickSkipToResults,
  clickNext,
  clickSkip,
  revealAnswer,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
