const { Schema } = require('mongoose')

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    place: { type: Schema.Types.ObjectId, ref: 'Country' }
  },
  { timestamps: true }
)

module.exports = countrySchema
