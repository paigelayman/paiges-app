import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [places, updatePlaces] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/place')
      updatePlaces(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>Countries</h1>
    </div>
  )
}

export default App
