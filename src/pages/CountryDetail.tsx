import { useParams } from 'react-router';
import CountryCard from '../components/countryCard';
import Paper from '@mui/material/Paper';

import type { Country } from '../redux/types';

import './styles.scss';
import { useAppSelector } from '../redux/store';

export default function CountryDetail() {
  const countries = useAppSelector(state => state.countries)
  const { country_name } = useParams();
  const country = countries.data.find((c: Country) => c.name === country_name) as Country;
  return (
    <Paper className="country-page" elevation={0}>
      <CountryCard country={country} />
    </Paper>
  );
}
