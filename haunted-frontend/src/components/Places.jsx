import React from 'react'
import {Link} from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Places = () => {
  const [formState, setFormState] = useState({ name: '', location: '', description: '', hauntedYear: '', image:'' })
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
    setFormState({ name: '', location: '', description: '', hauntedYear: '', image:'' })
    navigate('/places')
  }

  return (
    <div className="places">
      <h1>Haunted Places</h1>
      {places.map((place) => (
        <div className="places" key={place._id}>
          <h2>{place.name}</h2>
          <img src={place.image} id="haunt-image" alt="place" />
          <p className = 'year'>Haunted Since {place.hauntedYear}</p>
          <p>{place.description}</p>
        </div>
      ))}
      <button className='link-button'> <Link className='link' to='/'>Back to Countries</Link></button>
     
      <form onSubmit={handleSubmit}>
      <h3>Add Haunted Place: </h3>
        <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="location">Location:</label>
        <input id="location" value={formState.location} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input id="description" value={formState.description} onChange={handleChange} />
        <label htmlFor="hauntedYear">Year:</label>
        <input id="hauntedYear" value={formState.hauntedYear} onChange={handleChange} />
        <label htmlFor="image">Image Link:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Places