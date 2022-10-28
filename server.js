const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country, Place } = require('./models')

const app = express()

app.use(express.static(`${__dirname}/haunted-frontend/build`))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(express.json())

const theCountryController = require('./controllers/theCountryController.js')
const placeController = require('./controllers/placeController.js')

app.get('/', (req, res) => {
  res.send({ msg: 'route being hit' })
})

app.get('/countries', theCountryController.getCountries)
app.get('/countries/:id', theCountryController.getOneCountry)
app.post('/countries', theCountryController.addCountry)
app.put('/countries/:id', theCountryController.updateCountry)
app.delete('/countries/:id', theCountryController.removeCountry)

app.get('/places', placeController.getPlaces)
app.post('/places/:id', placeController.addPlace)
app.put('/places/:id', placeController.updatePlace)
app.delete('/places/:id', placeController.removePlace)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/haunted-frontend/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
