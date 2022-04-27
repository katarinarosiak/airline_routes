import React from 'react'
import  { airlines, airports} from '../data.js'

const Select = (props) => {

	return (
		<div>
			Show routes on
			<select id="airlineSelect" onChange={props.onSelect}>
				<option value={"All Airlines"}>All Airlines</option>
				{props.airlines.map(airline => 
					<option key={airline.id} value={airline.name}>{airline.name}</option>	
				)}
			</select>
			flying in or out of 
			<select id="airportSelect" onChange={props.onSelect}>
					<option value={"All Airports"}>All Airports</option>
				{props.airports.map(airport => 
					<option key={airport.id} value={airport.name}>{airport.name}</option>	
				)}
			</select>
			<button onClick={props.clearFilters}>Show All Routes</button>
		</div>
	)
}

export default Select

/*
when an option is chosen change state 


*/