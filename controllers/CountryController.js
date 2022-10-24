const { Country, Place } = require('../models')
const express = require('express')

// app.post('/countries', async (req, res) => {
//   let newCountry = await Country.create(req.body)
//   res.send(newCountry)
// })

const getCountries = async (req, res) => {
  try {
    let allCountries = await Country.find({})
    res.json(allCountries)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCountries
}
