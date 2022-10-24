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

app.get('/country', countryController.getCountries)
app.post('/country', countryController.addCountry)
app.put('/country/:id', countryController.updateCountry)
app.delete('/country/:id', countryController.removeCountry)

app.get('/place', placeController.getPlaces)
app.post('/place', placeController.addPlace)
app.put('/place/:id', placeController.updatePlace)
app.delete('/place/:id', placeController.removePlace)

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
