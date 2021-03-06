import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Favorites from './Favorites';
import Theme from './Theme';
import { showAll } from '../../redux/slices/favorites';
import './header.scss';

export default function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateBackToHome = useCallback(() => {
    navigate('/');
    dispatch(showAll());
  }, [navigate, dispatch]);

  return (
    <Paper className="header" elevation={0}>
      <Typography
        sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
        onClick={navigateBackToHome}
      >
        Countries Listed
      </Typography>
      <section className="header__navigation">
        <IconButton onClick={navigateBackToHome} color="inherit" aria-label="go-to-home">
          <HomeIcon />
        </IconButton>
        <Favorites />
        <Theme />
      </section>
    </Paper>
  );
}
