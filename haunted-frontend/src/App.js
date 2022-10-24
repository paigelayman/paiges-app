import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [countries, updateCountries] = useState([])
  const [formState, setFormState] = useState({ name: '', image: '', place: '' })
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newCountry = await axios
      .post('http://localhost:3001/countries', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    updateCountries([...countries, newCountry.data])
    setFormState({ name: '', image: '', place: '' })
  }

  return (
    <div className="App">
      <h1>Countries</h1>
      {countries.map((country) => (
        <div key={country._id}>
          <h2>{country.name}</h2>
        </div>
      ))}
      <h3>Add Country: </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="image">Image:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <label htmlFor="places">Place:</label>
        <input id="place" value={formState.place} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
