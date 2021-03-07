import { createSlice } from '@reduxjs/toolkit';
import { tags, MIN_EFFORT, MAX_EFFORT } from '../data/inventory';

const defaultCategoryData = tags.map(d => {
  return { name: d, isSelected: true };
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selections: [],
    results: [],
    showModal: false,
    activeProblemText: '',
    tags: defaultCategoryData,
    minEffort: MIN_EFFORT,
    maxEffort: MAX_EFFORT,
    begChecked: true,
    intChecked: true,
    advChecked: true,
    expChecked: true,
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
    setTags: (state, { type, payload }) => {
      state.tags = payload;
    },
    setEffortSlider: (state, { type, payload }) => {
      state.minEffort = payload[0];
      state.maxEffort = payload[1];
    },
    pressReset: (state, { type, payload }) => {
      state.tags = defaultCategoryData;
      state.minEffort = MIN_EFFORT;
      state.maxEffort = MAX_EFFORT;
      state.begChecked = true;
      state.intChecked = true;
      state.advChecked = true;
      state.expChecked = true;
    },
    setBegChecked: (state, { type, payload }) => {
      state.begChecked = payload;
    },
    setIntChecked: (state, { type, payload }) => {
      state.intChecked = payload;
    },
    setAdvChecked: (state, { type, payload }) => {
      state.advChecked = payload;
    },
    setExpChecked: (state, { type, payload }) => {
      state.expChecked = payload;
    },
  },
});

export const {
  setSelections,
  setResults,
  setShowModal,
  setActiveProblemText,
  setTags,
  pressReset,
  setEffortSlider,
  shiftSelection,
  setBegChecked,
  setIntChecked,
  setAdvChecked,
  setExpChecked,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
