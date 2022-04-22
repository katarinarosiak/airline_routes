import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, value) => {
	return ""
}

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
		<section>
			<p>
				Welcome to the app!
			</p>
			<Table className="routes-table" columns={columns} rows="" format={formatValue} />
		</section>
	</div>
)

export default App;
