import React from 'react'
import  { airlines, airports} from '../data.js'

const Select = () => {
	return (
		<div>
			Show routes on
			<select>
				{airlines.map(airline => 
					<option key={airline.id}>{airline.name}</option>	
				)}
			</select>
			flying in or out of 
			<select>
				{airports.map(airport => 
					<option key={airport.id}>{airport.name}</option>	
				)}
			</select>
		</div>
	)
}

export default Select