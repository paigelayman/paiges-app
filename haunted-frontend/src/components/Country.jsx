import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {

let { id } = useParams()
console.log(id)

  return (
    <h1>Country</h1> 
  )  
}


export default Country