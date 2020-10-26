import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './views/Home';
import NoMatch from './views/NoMatch';
import FoodBook from './views/FoodBook';
import ClothesBook from './views/ClothesBook';
import TravelBook from './views/TravelBook';
import PetsBook from './views/PetsBook';
import LearnBook from './views/LearnBook';
import TrafficBook from './views/TrafficBook';
import Money from './views/Money';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/home'>
						<Home/>
					</Route>
					<Route exact path='/money'>
						<Money/>
					</Route>
					<Route exact path='/food'>
						<FoodBook/>
					</Route>
					<Route exact path='/clothes'>
						<ClothesBook/>
					</Route>
					<Route exact path='/travel'>
						<TravelBook/>
					</Route>
					<Route exact path='/pets'>
						<PetsBook/>
					</Route>
					<Route exact path='/learn'>
						<LearnBook/>
					</Route>
					<Route exact path='/traffic'>
						<TrafficBook/>
					</Route>
					<Redirect exact from="/" to="/home"/>
					<Route path="*">
						<NoMatch/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
