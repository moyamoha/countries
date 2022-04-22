import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import Heart from '../favoriteCountry';
import { Country } from '../../redux/types';
import './styles.scss';

type CountryRowProps = {
  country: Country;
};

export default function CountryRow({ country }: CountryRowProps) {
  return (
    <TableRow>
      <TableCell>
        <img
          src={country.flag}
          alt={`flag of ${country.name}`}
          style={{ width: '40px', height: '30px' }}
        />
      </TableCell>
      <TableCell>
        <Link to={`/${country.name}`} className="country-link">
          <Typography>{country.name}</Typography>
        </Link>
      </TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>{country.capital}</TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell align="center">
        <Heart country={country} />
      </TableCell>
    </TableRow>
  );
}
