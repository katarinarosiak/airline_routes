import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import Table from './components/Table'
import Select from './components/Select';


const App = () => {

	// const formatValue = (property, value) => {
	// 	return ""
	// }



	return (
		<div className="app">
		<header className="header">
			<h1 className="title">Airline Routes</h1>
		</header>
			<section>
				<Select />
				<Table className="routes-table" />
				{/* <Table className="routes-table" columns={columns} rows="" format={formatValue} /> */}
			</section>
		</div>
	)
}


export default App;
