import { useMemo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import type { Country } from '../../redux/types';
import { fetchData, getFavsFromStorage } from '../../redux/thunk-actions';
import { Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import '../countryTable/styles.scss';

export default function CountryAsList() {
  const countries = useAppSelector((state) => state.countries);
  const favorites = useAppSelector((state) => state.favorites);
  const filterWord = countries.filterWord;
  const dispatch = useAppDispatch();

  const data = useMemo(() => {
    return (favorites.isShowing ? favorites.content : countries.data).filter(
      (c: Country) =>
        c.name?.includes(filterWord) ||
        c.region?.includes(filterWord) ||
        c.capital?.includes(filterWord)
    );
  }, [favorites, countries, filterWord]);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(getFavsFromStorage());
  }, [dispatch]);
  return (
    <>
      {data.length > 0 ? (
        <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', p: 0, mt: 2 }}>
          {data.map((c: Country) => (
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flexGrow: 1,
                px: 3,
                py: 2,
              }}
              elevation={1}
              key={c.name}
            >
              <img
                src={ c.flags.svg || c.flags.png }
                alt={`flag of ${c.name}`}
                style={{ width: '40px', height: '30px' }}
              />
              <Link to={`/${c.name}`} className="country-link">
                <Typography>{c.name}</Typography>
              </Link>
            </Paper>
          ))}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
