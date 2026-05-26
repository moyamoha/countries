import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { showFavorites } from '../../redux/slices/favorites';

export default function Favorites() {
  const countOfFavs = useAppSelector((state) => state.favorites.count);
  const dispatch = useAppDispatch();

  const chooseData = useCallback(() => {
    dispatch(showFavorites());
  }, [dispatch]);

  return (
    <IconButton onClick={chooseData} color="inherit" aria-label="show-favorites">
      <Badge badgeContent={countOfFavs} color="info">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
}
