import { useMemo, useEffect } from 'react';
import { TableBody } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchData, getFavsFromStorage } from '../../redux/thunk-actions';
import CountryRow from './CountryRow';
import type { Country } from '../../redux/types';

export default function CountryTableBody() {
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
        <TableBody sx={{ fontSize: 'large' }}>
          {data.map((c: Country) => (
            <CountryRow country={c} key={c.name} />
          ))}
        </TableBody>
      ) : (
        <></>
      )}
    </>
  );
}
