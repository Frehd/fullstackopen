import React from 'react'
import Person from './Person'

const NumberList = ({phonebook, searchString, handleDelete}) => (
  <>
    <h2>Numbers</h2>
    {phonebook.map(
      (person) => {
        if(person.name.toLowerCase().includes(searchString.toLowerCase())){
          return(<Person key={person.id} person={person} handleDelete={handleDelete}/>)
        } else {
          return(<></>)
        }
      }
    )}
  </>
)
    
export default NumberList