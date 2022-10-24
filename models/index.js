const mongoose = require('mongoose')
const countrySchema = require('./country')
const placeSchema = require('./place')

const Country = mongoose.model('Country', countrySchema)
const Place = mongoose.model('Place', placeSchema)

module.exports = {
  Country,
  Place
}
