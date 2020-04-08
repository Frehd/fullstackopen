import React from 'react'
import Weather from './Weather'

const CountryDetails = ({country, apiKey}) => {
  return (
  <>
    <h1>{country.name}</h1>
    <p />
    Capital: {country.capital}
    <p />
    Population: {country.population}
    <h2>Languages:</h2>
    {country.languages.map((language) => (<div key={language.name}>•{language.name}</div>))}
    <img src={country.flag} alt="Flag" width="100"/>
    <Weather city={country.capital} apiKey={apiKey}/>
  </>)
}

export default CountryDetails