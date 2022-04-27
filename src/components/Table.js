import React from 'react'
import  {getAirlineById, getAirportByCode} from '../data.js'
import { useState } from 'react';

const Table = ({selectedRoutes}) => {
	
	const [ sliceStart, setSliceStart ] = useState(0);
	const maxShown = 25;
	const selectedRoutesSlice = selectedRoutes.slice(sliceStart, sliceStart+maxShown);
	const showingPageStart = sliceStart+1;
	const showingPageEnd = sliceStart + selectedRoutesSlice.length; 

	const showNext = () => {
		setSliceStart(() => {
			return sliceStart + selectedRoutesSlice.length;  
		})
	}

	const showPrevious = () => {
		setSliceStart(() => {
			return sliceStart - selectedRoutesSlice.length;
		})
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
					{selectedRoutesSlice.map(route => 
						<tr>
							<td>{getAirlineById(route.airline)}</td>
							<td>{getAirportByCode(route.src)}</td>
							<td>{getAirportByCode(route.dest)}</td>
						</tr>
					)}
				</tbody>
			</table>
			<p>Showing {showingPageStart} - {showingPageEnd} routes of {selectedRoutes.length} total routes</p>
			<div>
				<button id="previous" onClick={showPrevious} disabled={showingPageStart === 1}>Previous Page</button>
				<button id="next" onClick={showNext} disabled={showingPageEnd === selectedRoutes.length}>Next Page</button>
			</div>
		</div>
	)
}

export default Table

