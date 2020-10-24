import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Pay from './views/Pay';
import Income from './views/Income';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/pay'>
						<Pay/>
					</Route>
					<Route exact path='/income'>
						<Income/>
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
