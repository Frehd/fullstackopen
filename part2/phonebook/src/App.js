import React, { useState, useEffect} from 'react'
import AddPersonForm from './components/AddPersonForm'
import NumberList from './components/NumberList'
import SearchBox from './components/SearchBox'
import phonebookService from './components/phonebookService'
import Notification from './components/Notification'

const App = () => {
  const [ phonebook, setPhonebook] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ notification, setMessage] = useState({message:'', positive:''})

  const stateFunctions = {
    setName(name) {
      setNewName(name);
    },
    setNumber(number) {
      setNewNumber(number);
    }
  }

  useEffect(() => {
    phonebookService
      .getAll()
      .then(data => {
        setPhonebook(data)
      })
  }, [])

  const reload = () => {phonebookService.getAll().then(data => {setPhonebook(data)})}

  const handleDelete = (person) => (() => {
    if(window.confirm(`Do you really want to delete ${person.name}`)){
      phonebookService.remove(person.id).then(() => {reload(); setMessage({message:`Removed ${person.name}`, positive:true})}).catch(
        setMessage({message:`Contact ${newName} has already been removed from the server`, positive:false})
      )
    }
  })

  const addPerson = (event) => {
    event.preventDefault()
    if(phonebook.filter(person => person.name === newName).length === 0){
      phonebookService.create({name:newName,number:newNumber}).then(() => {
        reload();
        setMessage({message:`Added ${newName}`, positive:true}); 
        setNewName(''); setNewNumber('')}).catch(
          setMessage({message:`Server Error`, positive:false})
      )
    } else {
      if(window.confirm(`Do you really want to change ${newName}'s number?`)){
        phonebookService.update(phonebook.filter(person => person.name === newName)[0].id, {name:newName,number:newNumber}).then(
          () => {reload(); setMessage({message:`Changed ${newName} number`, positive:true}); setNewName(''); setNewNumber('')}).catch(
            setMessage({message:`Contact ${newName} has already been removed from the server`, positive:false})
          )
      }
    }
  }

  const handleFormChange = (attribute) => (
    (event) => {console.log(`set${attribute}`);stateFunctions[`set${attribute}`](event.target.value)}
  )

  return (
    <div>
      <Notification message={notification.message} positive={notification.positive}/> 
      <h2>Phonebook</h2>
      <SearchBox content={search} handleChange={(event) => setSearch(event.target.value)}/>
      <AddPersonForm handleChange={handleFormChange} content={{name:newName,number:newNumber}} handleSubmit={addPerson}/>
      <NumberList phonebook={phonebook} searchString={search} handleDelete={handleDelete}/>
    </div>
  )
}

export default App