const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongo = require('./mongo')
const app = express()

morgan.token('body', function getBody (req) {
  return JSON.stringify(req.body)
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(errorHandler)

let persons = [
  {
    'name': 'Arto Hellas',
    'number': '040-123456',
    'id': 1
  },
  {
    'name': 'Ada Lovelace',
    'number': '39-44-5323523',
    'id': 2
  },
  {
    'name': 'Dan Abramov',
    'number': '12-43-234345',
    'id': 3
  },
  {
    'name': 'Mary Poppendieck',
    'number': '39-23-6423122',
    'id': 4
  }
]

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  mongo.getPerson(id).then(
    (person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }})
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if(persons.filter(person => (person.name===body.name)).length > 0){
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number
  }

  mongo.createPerson(person).then(() => {response.json(person)}, (error) => {response.status(400).json({ error: error.message })})
})

app.put('/api/persons/:id', (request, response) => {
  const body = request.body
  const id = request.params.id

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const person = {
    name: body.name,
    number: body.number
  }

  mongo.updatePerson(id, person).then(() => {response.json(person)}, (error) => {console.log(error);response.status(404).end()})

})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  mongo.deletePerson(id)

  response.status(204).end()
})

app.get('/api/persons', (req, res) => {
  mongo.getPersons().then(persons => {res.json(persons)})
})

app.get('/info', (req, res) => {
  mongo.getPersons().then(persons => {res.end(`The phonebook contains ${persons.length} entries\n${Date()}`)})

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})