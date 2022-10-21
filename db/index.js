const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MONGODB')
  })
  .catch((e) => {
    console.log('connection failed', e.messages)
  })

const db = mongoose.connection

module.exports = db
