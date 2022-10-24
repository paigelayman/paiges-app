const { Country, Place } = require('../models')
const express = require('express')

const addCountry = async (req, res) => {
  try {
    let newCountry = await Country.create(req.body)
    res.send(newCountry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCountries = async (req, res) => {
  try {
    let allCountries = await Country.find({})
    res.json(allCountries)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCountry = async (req, res) => {
  try {
    let fixCountry = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(fixCountry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const removeCountry = async (req, res) => {
  try {
    let removedCountry = await Country.findByIdAndDelete(
      req.params.id,
      req.body
    )
    res.json(removedCountry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCountries,
  addCountry,
  updateCountry,
  removeCountry
}
