import { useState, useEffect } from 'react'

import { Country } from '../redux/types'

export default function useCountries() {

  const [countries, setCountries] = useState<Country[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    if (countries.length > 0) {
      return
    }
    const abortController = new AbortController()
    fetch("https://restcountries.com/v2/all", {
      method: "GET",
      signal: abortController.signal
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCountries(data)
      })
      .catch(err => {
        setError(err)
      })
    
    return () => {
      abortController.abort()
    }
  })

  return [error, countries]
} 
