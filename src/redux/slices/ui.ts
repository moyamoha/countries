import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';

export type UiType = {
  smallScreen: boolean;
  mode: PaletteMode;
};

const initialState: UiType = {
  smallScreen: window.innerWidth < 750,
  mode: 'light',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSmallScreen: (state: UiType, action: PayloadAction<boolean>) => {
      state.smallScreen = action.payload;
    },
    changeMode: (state: UiType, action: PayloadAction<PaletteMode>) => {
      localStorage.setItem('theme', JSON.stringify(action.payload));
      state.mode = action.payload;
    },
  },
});

export const { toggleSmallScreen, changeMode } = uiSlice.actions;
export default uiSlice.reducer;
