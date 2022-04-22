import { useMemo, useEffect } from 'react';
import { TableBody } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData, getFavsFromStorage } from '../../redux/thunk-actions';
import CountryRow from './CountryRow';
import { Country } from '../../redux/types';
import { InitialState } from '../../redux/types';

export default function CountryTableBody() {
  const countries = useSelector((state: InitialState) => state.countries);
  const favorites = useSelector((state: InitialState) => state.favorites);
  const filterWord = countries.filterWord;
  const dispatch = useDispatch();

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
