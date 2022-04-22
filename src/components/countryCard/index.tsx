import { useMemo } from 'react';
import Paper from '@mui/material/Paper';
import { Country } from '../../redux/types';
import DetailAccordion from './DetailAccordion';

import FlagImage from './FlagImage';
import Heart from '../favoriteCountry';
import BackButton from './BackButton';
import './styles.scss';

type IndexPropsType = {
  country: Country;
};

export default function Index({ country }: IndexPropsType) {
  const languages = useMemo(() => {
    return country.languages ? country.languages.map((lang) => lang.name) : ['N/A'];
  }, [country.languages]);

  const currencies = useMemo(() => {
    return country.currencies ? country.currencies.map((curr) => curr.name) : ['N/A'];
  }, [country.currencies]);

  const timeZones = useMemo(() => {
    return country.timezones.length > 0 ? country.timezones : ['N/A'];
  }, [country.timezones]);

  return (
    <Paper elevation={0} className="country-card">
      <FlagImage country={country} />
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
          pl: 1,
          pr: 1.5,
        }}
      >
        <span>{country.name}</span>
        <Heart country={country} />
      </Paper>
      <DetailAccordion field="Native name" value={[country.nativeName || 'N/A']} />
      <DetailAccordion field="region" value={[country.region]} />
      <DetailAccordion field="capital" value={[country.capital || 'N/A']} />
      <DetailAccordion field="Population" value={[country.population + '']} />
      <DetailAccordion field="Languages" value={languages} />
      <DetailAccordion field="Currencies" value={currencies} />
      <DetailAccordion field="Time Zones" value={timeZones} />
      <DetailAccordion field="Borders" value={country.borders ? country.borders : ['N/A']} />
      <BackButton />
    </Paper>
  );
}
