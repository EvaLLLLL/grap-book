import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './views/Home';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/home'>
						<Home/>
					</Route>
					<Route exact path='/income'>
						<Home/>
					</Route>
					<Route exact path='/statistics'>
						<Statistics/>
					</Route>
					<Redirect exact from="/" to="/pay"/>
					<Route path="*">
						<NoMatch/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
