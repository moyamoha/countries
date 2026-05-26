import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from './slices/countries';
import favoritesReducer from './slices/favorites';
import uiReducer from './slices/ui';
import { useDispatch, useSelector } from 'react-redux';

const rootReducer = {
  favorites: favoritesReducer,
  countries: countriesReducer,
  ui: uiReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector<RootState, T>(selector);

export default store;
