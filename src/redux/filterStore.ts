import { createSlice } from '@reduxjs/toolkit';
import { tags } from '../data/inventory';

export interface Tag {
  name: string;
  isSelected: boolean;
}

const defaultCategoryData: Tag[] = tags.map(d => {
  return { name: d, isSelected: false };
});

interface FilterState {
  selections: any[];
  results: any[];
  showModal: boolean;
  activeProblemText: string;
  activeProblemId: string;
  tags: Tag[];
}

const initialState: FilterState = {
  selections: [],
  results: [],
  showModal: false,
  activeProblemText: '',
  activeProblemId: '',
  tags: defaultCategoryData,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelections: (state, { type, payload }) => {
      state.selections = payload;
    },
    shiftSelection: state => {
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
    setActiveProblemId: (state, { type, payload }) => {
      state.activeProblemId = payload;
    },
    setTags: (state, { type, payload }) => {
      state.tags = payload;
    },
    pressReset: state => {
      state.tags = defaultCategoryData;
    },
  },
});

export const {
  setSelections,
  setResults,
  setShowModal,
  setActiveProblemText,
  setActiveProblemId,
  setTags,
  pressReset,
  shiftSelection,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
