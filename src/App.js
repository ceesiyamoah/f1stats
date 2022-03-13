import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConstStandings from './pages/ConstStandings/ConstStandings';
import DriverStandings from './pages/DriverStandings/DriverStandings';
import Home from './pages/Home';
import Races from './pages/Races/Races';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/races/:year' element={<Races />} />
				<Route path='/driverstandings/:year' element={<DriverStandings />} />
				<Route
					path='/constructorstandings/:year'
					element={<ConstStandings />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
