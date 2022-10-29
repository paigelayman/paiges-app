import React from 'react'
import {Link} from 'react-router-dom' 
import { useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate } from 'react-router-dom'

const Places = () => {
  const [formState, setFormState] = useState({ name: '', location: '', description: '', hauntedYear: '', image:'' })
  const [places, updatePlaces] = useState([])
  let { id } = useParams()
const navigate = useNavigate()
  

const handleChange = (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
}
useEffect(() => {
  const apiCall = async () => {
  let response = await axios.get(`http://localhost:3001/places`)
  updatePlaces(response.data)
  }
  apiCall()
}, [])

const handleSubmit = async (event) => {
  event.preventDefault()
  let addedPlace = await axios
    .post(`http://localhost:3001/places`, formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
    updatePlaces([...places, addedPlace.data])
    setFormState({ name: '', location: '', description: '', hauntedYear: '', image:'' })

}

const handleUpdate = async (event) => {
  event.preventDefault()
  let newCountry = await axios.put(`http://localhost:3001/countries/${id}`, formState)
  updatePlaces([places, newCountry.data])
  setFormState({name: '', image: ''})
  navigate(`/`)
  }

return (
  <div className="places">
    <h1>Haunted Places</h1>
    {places ? places.map((place) => (
    <div className="places" key={place._id}>
      <h2>{place.name}</h2>
        <img src={place.image} id="haunt-image" alt="place" />
        <p className = 'year'>Haunted Since {place.hauntedYear}</p>
        <p className='description'>{place.description}</p>
    </div>
    )): "" }
      <button className='link-button'> <Link className='link' to='/'>Back to Countries</Link></button>
      <form onSubmit={handleUpdate}>
      <h3>Update Country: </h3>
        <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="image">Flag Image Link:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Places