import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Weather = ({city, apiKey}) => {
  const [ weather, setWeather] = useState()
  useEffect(() => {
    const eventHandler = response => {
      setWeather(response.data)
    }
    const promise = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    promise.then(eventHandler)
  }, [city, apiKey])
  if(weather !== undefined){
    return (
      <>
        <h2>Weather in {city}</h2>
        {weather.weather[0].description} {(weather.main.temp/10).toFixed(2)} °C<p/>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' width='100'/><p/>
      </>
    )
  } else {
    return (
      <>
        <h2>Weather in {city}</h2>
        loading...
      </>
    )
  }
  
}

export default Weather