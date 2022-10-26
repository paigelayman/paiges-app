import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Country = () => {
let { id } = useParams()
  const [country, showCountry] = useState('')
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/countries/${id}`)
      showCountry(response.data)
    }
    apiCall()
  }, [])


  return (
    <div>
      <div>{country.places}</div>
    </div>  
  )
  }


export default Country