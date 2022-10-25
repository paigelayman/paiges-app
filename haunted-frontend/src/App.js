import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import Places from './components/Places'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [formState, setFormState] = useState({ name: '', image: '', place: '' })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home handleChange={handleChange} />} />
        {/* <Route
          path="/places"
          element={<Places formState={formState} />}
        /> */}
      </Routes>
    </div>
  )
}

export default App
