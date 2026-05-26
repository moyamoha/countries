import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

import type {Country } from '../../redux/types';
import { addFavorite, removeFavorite } from '../../redux/thunk-actions';

type HeartProps = {
  country: Country;
};

export default function Heart({ country }: HeartProps) {
  const favs = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  function addOrRemoveFav() {
    const content = favs.content;
    const countryInStore = content.find((c) => c.name === country.name);
    if (countryInStore) {
      dispatch(removeFavorite(country));
    } else {
      dispatch(addFavorite(country));
    }
  }

  const countryIsFavorite = useMemo(
    () => favs.content.find((c) => c.name === country.name),
    [favs.content, country.name]
  );
  return (
    <IconButton onClick={addOrRemoveFav} color="inherit" aria-label="mark-as-favorite">
      <FavoriteIcon color={countryIsFavorite ? 'error' : 'inherit'} />
    </IconButton>
  );
}
