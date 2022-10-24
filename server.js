const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country, Place } = require('./models')
const countryController = require('./controllers/countryController.js')
const placeController = require('./controllers/placeController.js')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'route being hit' })
})

app.get('/countries', countryController.getCountries)
app.post('/countries', countryController.addCountry)
app.put('/countries/:id', countryController.updateCountry)
app.delete('/countries/:id', countryController.removeCountry)

app.get('/places', placeController.getPlaces)
app.post('/places', placeController.addPlace)
app.put('/places/:id', placeController.updatePlace)
app.delete('/places/:id', placeController.removePlace)

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
