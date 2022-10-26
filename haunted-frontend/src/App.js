import './App.css'
import { useState, useEffect } from 'react'
import Places from './components/Places'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Country from './components/Country'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="countries/:id" element={<Country />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
