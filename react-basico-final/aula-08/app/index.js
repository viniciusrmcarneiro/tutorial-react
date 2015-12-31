import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, } from 'react-router'

import App from './app'
import Login from './login'


const Routes = (
	<Router>
		<Route
			path="/"
			component={App}
		>
			<Route
				path="login"
				component={Login}
			/>
		</Route>
	</Router>
);

ReactDOM.render(Routes, document.getElementById('meu-app-aula-07'));
