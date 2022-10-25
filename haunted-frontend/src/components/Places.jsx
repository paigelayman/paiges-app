import React from 'react'
import {Link} from 'react-router-dom' 


const Places = (props) => {

  return (
    <div className="App">
      <h1>Haunted Places</h1>
      {props.places.map((place) => (
        <div key={place._id}>
          <h2>{place.name}</h2>
          <img src={place.image} alt="flag"/>
          <h3></h3>
        </div>
      ))}
      <h3>Add Country: </h3>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" value={props.formState.name} onChange={props.handleChange} />
        <label htmlFor="location">Location:</label>
        <input id="location" value={props.formState.location} onChange={props.handleChange} />
        <label htmlFor="description">Description:</label>
        <input id="description" value={props.formState.description} onChange={props.handleChange} />
        <label htmlFor="hauntedYear">Year:</label>
        <input id="hauntedYear" value={props.formState.place} onChange={props.handleChange} />
        <label htmlFor="image">Year:</label>
        <input id="image" value={props.formState.image} onChange={props.handleChange} />
        <button type="submit">Submit</button>
      </form>
      <footer> <Link to='/'>Back to Countries</Link></footer>
    </div>
  )
}

export default Places