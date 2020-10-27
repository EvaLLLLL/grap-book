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
import addQrcode from './lib/addQrcode';

function App() {
	addQrcode()
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/home'>
						<Home/>
					</Route>
					<Route exact path='/money/food'>
						<FoodBook/>
					</Route>
					<Route exact path='/money/food/edit'>
						<Money/>
					</Route>
					<Route exact path='/money/clothes'>
						<ClothesBook/>
					</Route>
					<Route exact path='/money/clothes/edit'>
						<Money/>
					</Route>
					<Route exact path='/money/travel'>
						<TravelBook/>
					</Route>
					<Route exact path='/money/travel/edit'>
						<Money/>
					</Route>
					<Route exact path='/money/pets'>
						<PetsBook/>
					</Route>
					<Route exact path='/money/pets/edit'>
						<Money/>
					</Route>
					<Route exact path='/money/learn'>
						<LearnBook/>
					</Route>
					<Route exact path='/money/learn/edit'>
						<Money/>
					</Route>
					<Route exact path='/money/traffic'>
						<TrafficBook/>
					</Route>
					<Route exact path='/money/traffic/edit'>
						<Money/>
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
