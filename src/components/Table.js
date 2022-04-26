import React from 'react'
import  {routes, getAirlineById, getAirportByCode} from '../data.js'
import { useState } from 'react';

const Table = ({selectedRoutes}) => {
	const [ displayedRoutes, setDisplayedRoutes ] = useState(0)
	const maxShown = 25; 
	


	const showPrevious = (event) => {
		setDisplayedRoutes(displayedRoutes - maxShown)
	}

	const showNext = (event) => {
		setDisplayedRoutes(displayedRoutes + maxShown)
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Airline</th>
						<th>Source</th>
						<th>Destination</th>
					</tr>
				</thead>
				<tbody>
					{selectedRoutes.slice(displayedRoutes,displayedRoutes+25).map(route => 
						<tr>
							<td>{getAirlineById(route.airline)}</td>
							<td>{getAirportByCode(route.src)}</td>
							<td>{getAirportByCode(route.dest)}</td>
						</tr>
					)}
				</tbody>
			</table>
			<p>Showing {displayedRoutes+1} - {displayedRoutes+maxShown} routes of {routes.length} total routes</p>
			<div>
				<button id="previous" onClick={showPrevious} disabled={displayedRoutes+1 === 1}>Previous Page</button>
				<button id="next" onClick={showNext} disabled={displayedRoutes+maxShown === selectedRoutes.length}>Next Page</button>
			</div>
		</div>
	)
}

export default Table

