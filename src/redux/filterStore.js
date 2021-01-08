import { createSlice } from '@reduxjs/toolkit';
import { categories, MIN_EFFORT, MAX_EFFORT } from '../data/inventory';

const defaultCategoryData = categories.map(d => {
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
    dsChecked: true,
    algChecked: true,
    minEffort: MIN_EFFORT,
    maxEffort: MAX_EFFORT,
    begChecked: true,
    intChecked: true,
    advChecked: true,
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
    setEffortSlider: (state, { type, payload }) => {
      state.minEffort = payload[0];
      state.maxEffort = payload[1];
    },
    pressReset: (state, { type, payload }) => {
      state.categories = defaultCategoryData;
      state.minEffort = MIN_EFFORT;
      state.maxEffort = MAX_EFFORT;
      state.dsChecked = true;
      state.algChecked = true;
      state.begChecked = true;
      state.intChecked = true;
      state.advChecked = true;
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
  setEffortSlider,
  shiftSelection,
  setBegChecked,
  setIntChecked,
  setAdvChecked,
} = filterSlice.actions;

export const selectSelections = state => state.filter.selections;
export const selectResults = state => state.filter.results;
export const selectShowModal = state => state.filter.showModal;
export const selectActiveProblemText = state => state.filter.activeProblemText;
export const selectCategories = state => state.filter.categories;
export const selectDsChecked = state => state.filter.dsChecked;
export const selectAlgChecked = state => state.filter.algChecked;
export const selectMinEffort = state => state.filter.minEffort;
export const selectMaxEffort = state => state.filter.maxEffort;
export const selectBegChecked = state => state.filter.begChecked;
export const selectIntChecked = state => state.filter.intChecked;
export const selectAdvChecked = state => state.filter.advChecked;

export const filterReducer = filterSlice.reducer;
