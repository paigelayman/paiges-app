import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 

const Country = () => {
let { id } = useParams()
const navigate = useNavigate()

const [formState, setFormState] = useState({ name: '', placeName: '', location: '', description: '', hauntedYear: '', placeImage: '', image:''})
const [countryPlaces, showCountry] = useState('')
const [places, updatePlaces] = useState('')
const [countries, updateCountries] = useState('')


  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

useEffect(() => {
  const apiCall = async () => {
    let response = await axios.get(`http://localhost:3001/countries/${id}`)
    showCountry(response.data.places)
    }
    apiCall()
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedPlace = await axios.post(`http://localhost:3001/places/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    updatePlaces([...places, addedPlace.data])
    setFormState({ placeName: '', location: '', description: '', hauntedYear: '', placeImage:'' })
    navigate(`/countries/${id}`)
}

const handleUpdate = async (event) => {
  event.preventDefault()
  let newCountry = await axios.put(`http://localhost:3001/countries/${id}`, formState)
  updateCountries([countries, newCountry.data])
  setFormState({name: '', image: ''})
  navigate(`/`)
  }


const deleteCountry = async (event) => {
  event.preventDefault()
  let deletedCountry = await axios.delete(`http://localhost:3001/countries/${id}`, formState)
  updateCountries([countries, deletedCountry.data])
  setFormState({name: '', location: '', description: '', hauntedYear: '', image:''})
  navigate(`/`)
  }



  return (
    <div>
    {countryPlaces ? countryPlaces.map((place) => (
      <div>
      <h1></h1>
      <h2>{place.name}</h2>
      <p>{place.location}</p>
      <img src={place.image} id="haunt-image" alt="place" />
      <p className = 'year'>Haunted Since {place.hauntedYear}</p>
      <p className='description'>{place.description}</p>
      
    </div>
    )): ''}
        <button className='link-button'>
        <Link className = 'link' to="/places">View All Haunted Places</Link>
        </button>
        <button className='link-button'> <Link className='link' to='/'>Back to Countries</Link></button>
        <form onSubmit={handleSubmit}>
      <h3>Add Haunted Place: </h3>
        <label htmlFor="placeName">Name: </label>
        <input id="placeName" value={formState.placeName} onChange={handleChange} />
        <label htmlFor="location">Location:</label>
        <input id="location" value={formState.location} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input id="description" value={formState.description} onChange={handleChange} />
        <label htmlFor="hauntedYear">Year:</label>
        <input id="hauntedYear" value={formState.hauntedYear} onChange={handleChange} />
        <label htmlFor="placeImage">Image Link:</label>
        <input id="placeImage" value={formState.placeImage} onChange={handleChange} />
        <button className='submit' type="submit">Submit</button>
      </form>
      <form onSubmit={handleUpdate}>
      <h3>Update Country: </h3>
        <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="image">Flag Image Link:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <button className='submit' type="submit">Submit</button>
      </form>
     
      <button className='link-button' onClick={deleteCountry}>Delete Country</button>
  
    </div>  
  
  )
  }


export default Country