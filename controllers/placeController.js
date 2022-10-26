const { Place } = require('../models')
const express = require('express')

const addPlace = async (req, res) => {
  try {
    let newPlace = await Place.create(req.body)
    res.send(newPlace)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlaces = async (req, res) => {
  try {
    let allPlaces = await Place.find({})
    res.json(allPlaces)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getOnePlace = async (req, res) => {
  console.log(req.params)
  const { id } = req.params
  const place = await Place.findById(id).populate('places')
  return res.send(place)
}

const updatePlace = async (req, res) => {
  try {
    let fixPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(fixPlace)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const removePlace = async (req, res) => {
  try {
    let removedPlace = await Place.findByIdAndDelete(req.params.id, req.body)
    res.json(removedPlace)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPlaces,
  addPlace,
  updatePlace,
  removePlace,
  getOnePlace
}
