import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selections: [],
  },
  reducers: {
    setSelections: (state, { type, payload }) => {
      console.log({ state });
      state.selections = payload;
    },
    /////
    //
  },
});

export const { setSelections } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
