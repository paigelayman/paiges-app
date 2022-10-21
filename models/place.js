const { Schema } = require('mongoose')

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  hauntedYear: { type: Number, required: true },
  image: { type: String, required: true }
})

module.exports = placeSchema
