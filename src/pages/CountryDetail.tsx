import { useParams } from 'react-router';
import CountryCard from '../components/countryCard';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Loader from '../components/loader';


import type { Country } from '../redux/types';
import useCountry from '../custom-hooks/useCountry';

import './styles.scss';

export default function CountryDetail() {
  const { country_name } = useParams();
  const [error, country] = useCountry(country_name as string);

  if (error) {
    return (
      <Paper className="country-page" elevation={0}>
        <Alert severity="error" sx={{ width: '100%' }}>
          There was an error fetching the country data
        </Alert>
      </Paper>
    );
  }
  return (
      <Paper className="country-page" elevation={0}>
          {country ? <CountryCard country={country as Country} /> : <Loader /> }
      </Paper>
  );
}
