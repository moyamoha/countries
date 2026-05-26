import type { Country } from '../../redux/types';

export default function FlagImage({ country }: { country: Country }) {
  return <img src={country.flags.svg || country.flags.png} alt={`Flag of ${country.name}`} className="flag" />;
}
