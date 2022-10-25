const CountryForm = (props) => {
    
return (
<div>
    <h3>Add Country: </h3>
      <form onSubmit={props.handleSubmit}>
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

export default CountryForm