const CountrySearch = (countries, searchString) => {
  let results = countries.filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()))
  return results
}
      
export default CountrySearch