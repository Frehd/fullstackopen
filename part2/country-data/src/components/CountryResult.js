import React from 'react'

const CountryResult = ({name, handleShowDetails}) => (
  <>
    {name}
    <button onClick={() => (handleShowDetails(name))}>show</button>
    <br/>
  </>
)
export default CountryResult