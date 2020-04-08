import React from 'react'

const Person = ({person, handleDelete}) => (
  <>
    {person.name} {person.number}
    <button onClick={handleDelete(person)}>delete</button>
    <br/>
  </>
)
    
export default Person