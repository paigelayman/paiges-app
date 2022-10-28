import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 



const Home = () => {
  const [formState, setFormState] = useState({ name: '', image: '', place: '' })
  const [countries, updateCountries] = useState([])
  const navigate = useNavigate()
 

const handleChange = (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
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
    .post('http://localhost:3001/countries', formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
  updateCountries([...countries, addedCountry.data])
  setFormState({ name: '', image: '', place: '' })
  }

const getPlace = (id) => {
  navigate(`countries/${id}`)
}

  
return (
  <div className="Home">
    <h1>Countries</h1>
    {countries.map((country) => (
      <div className="countries" key={country._id}>
        <h2 onClick={()=>{getPlace(country._id)}}>{country.name}</h2>
        <img src={country.image} alt="flag" />
        
      </div>
    ))}
      <button className='link-button'>
      <Link className = 'link' to="/places">View All Haunted Places</Link>
      </button>
      
      <form onSubmit={handleSubmit}>
      <h3>Add Country: </h3>
        <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="image">Flag Image Link:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <button className='submit' type="submit">Submit</button>
      </form>
     
    </div>
  )
}


export default Home
