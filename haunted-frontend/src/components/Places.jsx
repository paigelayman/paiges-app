import React from 'react'
import {Link} from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Places = (props) => {
  const [formState, setFormState] = useState({ name: '', image: '', place: '' })
  const [places, updatePlaces] = useState([])
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/places')
      updatePlaces(response.data)
    }
    apiCall()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedPlace = await axios
      .post('http://localhost:3001/places', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    updatePlaces([...places, addedPlace.data])
    setFormState({ name: '', image: '', place: '' })
    navigate('/')
  }

  return (
    <div className="places">
      <h1>Haunted Places</h1>
      <button>View All</button>
      {places.map((place) => (
        <div key={place._id}>
          <h2>{place.name}</h2>
          <img src={place.image} alt="place" />
        </div>
      ))}
      <h3>Add Haunted Place: </h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="location">Location:</label>
        <input id="location" value={formState.location} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input id="description" value={formState.description} onChange={handleChange} />
        <label htmlFor="hauntedYear">Year:</label>
        <input id="hauntedYear" value={formState.place} onChange={handleChange} />
        <label htmlFor="hauntedYear">Year:</label>
        <input id="hauntimage" value={formState.image} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <footer> <Link to='/'>Back to Countries</Link></footer>
    </div>
  )
}

export default Places