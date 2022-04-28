import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import Table from './components/Table'
import Select from './components/Select';
import Map from './components/Map';
import  {routes, airlines, airports, filterRoutes} from './data.js'


const App = () => {
	const defaultAirlines = 'All Airlines';
	const defaultAirports = 'All Airports';

	const [ selectedRoutes, setSelectedRoutes] = useState(routes);
	const [ selectedAirline, setSelectedAirline] = useState(defaultAirlines);
	const [ selectedAirport, setSelectedAirport ] = useState(defaultAirports);

	// const selectedRoutes = routes;

	// const onSelect = (e) => {
	// 	let filteredRoutes;
	// 	if (e.target.id === 'airlineSelect') {
	// 		filteredRoutes = filterRoutes(e.target.value, selectedAirport);
	// 		setSelectedRoutes(filteredRoutes);
	// 		setSelectedAirline(e.target.value); 
	// 	} else {
	// 		console.log('on select');
	// 		filteredRoutes = filterRoutes(selectedAirline, e.target.value)

	// 		setSelectedRoutes(filteredRoutes)
	// 		setSelectedAirport(e.target.value);
	// 	}


	// 	console.log('selectedRoutes', selectedRoutes)
	// }

	// const [ selectedRoutes, setSelectedRoutes] = useState(routes);
	// const [ selectedAirline, setSelectedAirline ] = useState('All Airlines');
	// const [selectedAirport, setSelectedAirport] = useState('All Airports');
	// const [ selectedAirlines, setSelectedAirlines ] = useState(airlines);
	// const [selectedAirports, setSelectedAirports] = useState(airports);

	const onSelect = (e) => {
		const name = e.target.value;
		
		let filteredRoutes;

		if (e.target.id === 'airlineSelect') {
			filteredRoutes = filterRoutes(name, selectedAirport)
			setSelectedAirline(name)
		} else {
			filteredRoutes = filterRoutes(selectedAirline, name)
			setSelectedAirport(name)
		}

		setSelectedRoutes(filteredRoutes)
	}

	/*
	adding clear filters button
	it doesn't reset select windows 
	*/
	const clearFilters = (e) => {
		setSelectedAirline(defaultAirlines);
		setSelectedAirport(defaultAirports);
		setSelectedRoutes(routes)
		document.getElementById('airlineSelect').value = defaultAirlines;
		document.getElementById('airportSelect').value = defaultAirports;		
	}



	return (
		<div className="app">
		<header className="header">
			<h1 className="title">Airline Routes</h1>
		</header>
		<section>
			<Map routes={selectedRoutes}/>
		</section>
			<section>
			<Select onSelect={onSelect}
			 	airlines={airlines}
				airports={airports}
				clearFilters={clearFilters}
				selectedRoutes={selectedRoutes}
				all={selectedAirline==='All Airlines'&&selectedAirport==='All Airports'}/>
				<Table className="routes-table" selectedRoutes={selectedRoutes}/>
			</section>
		</div>
	)
}


export default App;




