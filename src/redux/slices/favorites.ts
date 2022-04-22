import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../types';

export type FavsStateType = {
  isShowing: boolean;
  count: number;
  content: Country[];
};

const initialState: FavsStateType = {
  isShowing: false,
  count: 0,
  content: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    showAll: (state) => {
      state.isShowing = false;
    },
    setFavorites: (state, action: PayloadAction<Country[]>) => {
      state.content = action.payload;
      state.count = action.payload.length;
    },
    showFavorites: (state) => {
      state.isShowing = true;
    },
    sortFavorites(state, action: PayloadAction<(a: Country, b: Country) => number>) {
      state.content.sort(action.payload);
    },
  },
});

export const { showAll, showFavorites, setFavorites, sortFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
