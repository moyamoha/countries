import { Dispatch } from '@reduxjs/toolkit';

import { setData } from './slices/countries';
import { setFavorites } from './slices/favorites';
import { changeMode } from './slices/ui';
import { Country, InitialState } from './types';

export function fetchData() {
  return async (dispatch: Dispatch, getState: () => InitialState) => {
    if (getState().countries.data.length > 0) {
      return;
    }
    try {
      const response = await fetch('https://restcountries.com/v2/all');
      const data = await response.json();
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavsFromStorage() {
  return (dispatch: Dispatch) => {
    const favsStr = localStorage.getItem('favorites');
    if (favsStr) {
      dispatch(setFavorites(JSON.parse(favsStr)));
    } else {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  };
}

export function addFavorite(favorite: Country) {
  return (dispatch: Dispatch) => {
    const favsStr = localStorage.getItem('favorites');

    if (favsStr) {
      const favorites = JSON.parse(favsStr);
      favorites.push(favorite);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      dispatch(setFavorites(favorites));
    }
  };
}

export function removeFavorite(favorite: Country) {
  return (dispatch: Dispatch) => {
    const favsStr = localStorage.getItem('favorites');
    if (favsStr) {
      const favorites = JSON.parse(favsStr);
      const indexOfFav = favorites.map((f: Country) => f.name).indexOf(favorite.name);
      favorites.splice(indexOfFav, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      dispatch(setFavorites(favorites));
    }
  };
}

export function getModeFromStorage() {
  return (dispatch: Dispatch) => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      dispatch(changeMode(JSON.parse(theme)));
    } else {
      localStorage.setItem('theme', JSON.stringify('light'));
      dispatch(changeMode('light'));
    }
  };
}
