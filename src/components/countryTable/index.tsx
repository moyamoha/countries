import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import CountryTableHead from './CountryTableHead';
import CountryTableBody from './CountryTableBody';
import Loader from './../loader';
import CountriesAsList from '../CountryList';
import { toggleSmallScreen } from '../../redux/slices/ui';

export default function CountryTable() {
  const isLoading = useAppSelector((state) => state.countries.loading);
  const dispatch = useAppDispatch();
  const screenSizeIsSmall = useAppSelector((state) => state.ui.smallScreen);

  const changeUiState = useCallback(() => {
    if (window.innerWidth < 750) {
      dispatch(toggleSmallScreen(true));
    } else {
      dispatch(toggleSmallScreen(false));
    }
  }, [dispatch]);
  useEffect(() => {
    window.addEventListener('resize', changeUiState);
    return () => {
      window.removeEventListener('resize', changeUiState);
    };
  }, [changeUiState]);

  return (
    <>
      {screenSizeIsSmall ? (
        <CountriesAsList />
      ) : (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ overflowX: 'initial', tableLayout: 'fixed' }}
        >
          <Table stickyHeader={true}>
            <CountryTableHead />
            <CountryTableBody />
          </Table>
        </TableContainer>
      )}
      {isLoading ? <Loader /> : <></>}
    </>
  );
}
