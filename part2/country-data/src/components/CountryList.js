import React from 'react'
import CountryResult from './CountryResult'
import CountrySearch from './CountrySearch'

const CountryList = ({countries, searchString, handleShowDetails}) => {
  let results = CountrySearch(countries, searchString)
  if(results.length > 10){
    return(<>Too many matches, be more specific</>)
  } else {
    return (
      <>
        {results.map((country) => {return(<CountryResult key={country.name} name={country.name} handleShowDetails={handleShowDetails}/>)})}
      </>)
  }
}
export default CountryList