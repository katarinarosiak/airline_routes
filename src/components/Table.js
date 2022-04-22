import React from 'react'
import  {routes, getAirlineById, getAirportByCode} from '../data.js'
import { useState } from 'react';

const Table = () => {
	const [ displayedRoutes, setDisplayedRoutes ] = useState(0)

	const getRoutes = (event) => {
		console.log(event.target.add);
		if (event.target.id === 'previous') {
			setDisplayedRoutes(displayedRoutes - 25)
			if (displayedRoutes === 0) {
				event.target.setAttribute('disabled');
			} else {
				event.target.removeAttribute('disabled');
			}
		} else {
			setDisplayedRoutes(displayedRoutes + 25)
			if (displayedRoutes >= routes.length) {
				event.target.setAttribute('disabled');
			} else {
				event.target.removeAttribute('disabled');
			}
		}
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
					{routes.slice(displayedRoutes,displayedRoutes+25).map(route => 
						<tr>
							<td>{getAirlineById(route.airline)}</td>
							<td>{getAirportByCode(route.src)}</td>
							<td>{getAirportByCode(route.dest)}</td>
						</tr>
					)}
				</tbody>
			</table>
			<p>Showing {displayedRoutes+1} - {displayedRoutes+25} routes of {routes.length} total routes</p>
			<div>
				<button id="previous" onClick={getRoutes} disabled>Previous Page</button>
				<button id="next" onClick={getRoutes}>Next Page</button>
			</div>
		</div>
	)
}

export default Table