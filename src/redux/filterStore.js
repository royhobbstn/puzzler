import { createSlice } from '@reduxjs/toolkit';
import { aggregateData } from '../aggregateData';
import { MIN_DIFFICULTY, MIN_TIME, MAX_DIFFICULTY, MAX_TIME } from '../data/constants.js';

const defaultCategoryData = aggregateData.categories.map(d => {
  return { name: d, isSelected: true };
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selections: [],
    results: [],
    showModal: false,
    activeProblemText: '',
    categories: defaultCategoryData,
    minDifficulty: MIN_DIFFICULTY,
    maxDifficulty: MAX_DIFFICULTY,
    dsChecked: true,
    algChecked: true,
    minTime: MIN_TIME,
    maxTime: MAX_TIME,
  },
  reducers: {
    setSelections: (state, { type, payload }) => {
      state.selections = payload;
    },
    shiftSelection: (state, { type, payload }) => {
      state.selections = state.selections.slice(1);
    },
    setResults: (state, { type, payload }) => {
      state.results = payload;
    },
    setShowModal: (state, { type, payload }) => {
      state.showModal = payload;
    },
    setActiveProblemText: (state, { type, payload }) => {
      state.activeProblemText = payload;
    },
    setCategories: (state, { type, payload }) => {
      state.categories = payload;
    },
    setDsChecked: (state, { type, payload }) => {
      state.dsChecked = payload;
    },
    setAlgChecked: (state, { type, payload }) => {
      state.algChecked = payload;
    },
    setDifficultySlider: (state, { type, payload }) => {
      state.minDifficulty = payload[0];
      state.maxDifficulty = payload[1];
    },
    setTimeSlider: (state, { type, payload }) => {
      state.minTime = payload[0];
      state.maxTime = payload[1];
    },
    pressReset: (state, { type, payload }) => {
      state.categories = defaultCategoryData;
      state.minDifficulty = MIN_DIFFICULTY;
      state.maxDifficulty = MAX_DIFFICULTY;
      state.minTime = MIN_TIME;
      state.maxTime = MAX_TIME;
      state.dsChecked = true;
      state.algChecked = true;
    },
  },
});

export const {
  setSelections,
  setResults,
  setShowModal,
  setActiveProblemText,
  setCategories,
  setDsChecked,
  setAlgChecked,
  pressReset,
  setDifficultySlider,
  setTimeSlider,
  shiftSelection,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
