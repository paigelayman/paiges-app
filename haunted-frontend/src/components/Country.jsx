import React from 'react'
import axios from 'axios'
import { useState, useEffect, useNavigate } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 

const Country = (props) => {
let { id } = useParams()

const [formState, setFormState] = useState({ name: '', location: '', description: '', hauntedYear: '', image:'' })
const [countryPlaces, showCountry] = useState('')
const [places, updatePlaces] = useState([])

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
    let addedPlace = await axios.post(`http://localhost:3001/countries/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    updatePlaces([...places, addedPlace.data])
    setFormState({ name: '', location: '', description: '', hauntedYear: '', image:'' })
}


const deletePlace = async (event) => {
  event.preventDefault()
  let deletedPlace = await axios.delete(`http://localhost:3001/countries/${id}`)
  showCountry(deletedPlace)
  }


  return (
    <div>
    {countryPlaces ? countryPlaces.map((place) => (
      <div>
      <h1></h1>
      <h2>{place.name}</h2>
      <img src={place.image} id="haunt-image" alt="place" />
      <p className = 'year'>Haunted Since {place.hauntedYear}</p>
      <p className='description'>{place.description}</p>
      <button onClick={deletePlace()}>delete</button>
    </div>
    )): ''}
        <button className='link-button'>
        <Link className = 'link' to="/places">View All Haunted Places</Link>
        </button>
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


export default Country