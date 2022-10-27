import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 


const Country = (props) => {
let { id } = useParams()
  const [countryPlaces, showCountry] = useState('')
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/countries/${id}`)
      showCountry(response.data.places)
    }
    apiCall()
  }, [])


  return (
    <div>
    {countryPlaces ? countryPlaces.map((place) => (
      <div>
      <h1></h1>
      <h2>{place.name}</h2>
      <img src={place.image} id="haunt-image" alt="place" />
      <p className = 'year'>Haunted Since {place.hauntedYear}</p>
      <p className='description'>{place.description}</p>
    </div>
    )): ''}
        <button className='link-button'>
        <Link className = 'link' to="/places">View All Haunted Places</Link>
        </button>
        <button className='link-button'> <Link className='link' to='/'>Back to Countries</Link></button>
    </div>  
  )
  }


export default Country