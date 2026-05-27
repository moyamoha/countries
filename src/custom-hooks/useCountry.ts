// This hook is used to fetch one specific country
import { useState, useEffect } from 'react';
import type { Country } from '../redux/types';

export default function useCountry(countryName: string) {
  const [country, setCountry] = useState<Country>();
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://restcountries.com/v2/name/${countryName}`, {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCountry(data[0]);
        } else {
          setError('Country not found');
        }
      })
      .catch((err) => {
        setError(err);
      });

    return () => {
      abortController.abort();
    };
  }, [countryName]);

  return [error, country];
}
