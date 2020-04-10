const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const password = process.env.REACT_APP_MONGO_PASSWORD

const url =
  `mongodb+srv://fullstack:${password}@phonebook-vn6zs.mongodb.net/phonebook-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: { type: String, minlength:3, required: true, unique: true },
  number: { type: String, minlength:8, required: true, unique: false }
})

personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

const getPersons = () => {
  return Person.find({})
}

const getPerson = (id) => {
  return Person.find({ _id:id })
}

const createPerson = (person) => {
  let mongoPerson = new Person({ ...person })
  return mongoPerson.save()
}

const deletePerson = (id) => {
  return Person.findOneAndRemove({ _id:id }).exec()
}

const updatePerson = (id, person) => {
  return Person.findOneAndUpdate({ _id:id },{ name:person.name, number:person.number }).exec()
}

module.exports.getPersons = getPersons
module.exports.getPerson = getPerson
module.exports.createPerson = createPerson
module.exports.deletePerson = deletePerson
module.exports.updatePerson = updatePerson