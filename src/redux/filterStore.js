import { createSlice } from '@reduxjs/toolkit';
import { tags } from '../data/inventory';

const defaultCategoryData = tags.map(d => {
  return { name: d, isSelected: false };
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selections: [],
    results: [],
    showModal: false,
    activeProblemText: '',
    tags: defaultCategoryData,
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
    pressReset: (state, { type, payload }) => {
      state.tags = defaultCategoryData;
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
  shiftSelection,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
