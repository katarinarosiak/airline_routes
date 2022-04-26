import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import Table from './components/Table'
import Select from './components/Select';
import  {routes, airlines, airports, filterRoutes, getAirlineById, getAirportByCode} from './data.js'


const App = () => {
	
	const [ selectedRoutes, setSelectedRoutes] = useState(routes);
	const [ selectedAirline, setSelectedAirline ] = useState('All Airlines');
	const [selectedAirport, setSelectedAirport] = useState('All Airports');
	// const [ selectedAirlines, setSelectedAirlines ] = useState(airlines);
	// const [selectedAirports, setSelectedAirports] = useState(airports);

	const onSelect = (e) => {
		const name = e.target.value;
		
		let filteredRoutes;

		if (e.target.id === 'airline') {
			filteredRoutes = filterRoutes(name, selectedAirport)
			setSelectedAirline(name)
		} else {
			filteredRoutes = filterRoutes(selectedAirline, name)
			setSelectedAirport(name)
		}
		
		setSelectedRoutes(filteredRoutes)
		/*

		- on change collect the chosen value 
		- take the value of other option window 
		- filter routes to show only those
		 that airport is like selectedAirport
		 and 
		- airline is as selected irline
		- give the routes to Table 




		*/

	
	}


	return (
		<div className="app">
		<header className="header">
			<h1 className="title">Airline Routes</h1>
		</header>
			<section>
			<Select onSelect={onSelect} airlines={airlines} airports={airports}/>
				<Table className="routes-table" selectedRoutes={selectedRoutes}/>
			</section>
		</div>
	)
}


export default App;

