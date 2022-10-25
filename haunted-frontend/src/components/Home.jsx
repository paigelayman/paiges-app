import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


const Home = (props) => {
  const [countries, updateCountries] = useState([])
  const navigate = useNavigate()
  const toPlaces = () => {
    navigate(`/places`)
  }
  const showPlaces = (place) => {
    navigate(`${place.id}`)
  }
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)
    }
    apiCall()
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedCountry = await axios
      .post('http://localhost:3001/countries', props.formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    updateCountries([...countries, addedCountry.data])
    props.setFormState({ name: '', image: '', place: '' })
  }

  return (
    <div className="App">
      
      <h1>Countries</h1>
      <button onClick={toPlaces}>View All</button>
      {props.countries.map((country) => (
        <div key={country._id} onClick={() => showPlaces()}>
          <h2>{country.name}</h2>
          <img src={country.image} alt="flag"/>
          <h3></h3>
        </div>
      ))}
      <h3>Add Country: </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" value={props.formState.name} onChange={props.handleChange} />
        <label htmlFor="image">Image Link:</label>
        <input id="image" value={props.formState.image} onChange={props.handleChange} />
        <label htmlFor="places">Place:</label>
        <input id="place" value={props.formState.place} onChange={props.handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home
