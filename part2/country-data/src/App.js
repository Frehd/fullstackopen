import React, { useState, useEffect} from 'react'
import SearchBox from './components/SearchBox'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'
import axios from 'axios'
import './App.css';

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ search, setSearch] = useState('')
  const [ detailState, setDetailState] = useState({detail:false,country:''})

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const eventHandler = response => {
      setCountries(response.data)
    }
    const promise = axios.get('https://restcountries.eu/rest/v2/all')
    promise.then(eventHandler)
  }, [])

  const handleShowDetails = (name) => {
    setDetailState({detail:true,country:name})
  }

  if(detailState.detail === false) {
    return (
      <div>
        <h2>Country Info</h2>
        <SearchBox content={search} handleChange={(event) => setSearch(event.target.value)}/>
        <br/>
        <CountryList countries={countries} searchString={search} handleShowDetails={handleShowDetails}/>
      </div>
    )
  } else {
    return (
      <>
        <button onClick={(event) => {setDetailState({detail:false,country:''})}}>Back</button><br/>
        <CountryDetails apiKey={apiKey} country={countries.filter((country)=>(country.name===detailState.country))[0]}/>
      </>
    )
  }
}

export default App