import { useTheme } from '@mui/material';
import { useAppDispatch } from '../../redux/store';
import IconButton from '@mui/material/IconButton';
import DarkModeTwoTone from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoTone from '@mui/icons-material/LightModeTwoTone';

import { changeMode } from '../../redux/slices/ui';

export default function Theme() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const changeThemeOfApp = () => {
    dispatch(changeMode(theme.palette.mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <IconButton onClick={changeThemeOfApp} color="inherit" aria-label="toggle-dark-mode">
      {theme.palette.mode === 'dark' ? <LightModeTwoTone /> : <DarkModeTwoTone />}
    </IconButton>
  );
}
