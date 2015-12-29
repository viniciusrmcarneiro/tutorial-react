import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, } from 'react-router'

import App from './app'


const Routes = (
	<Router>
		<Route 
			path="/" 
			component={App}
		/>
	</Router>
);

ReactDOM.render(Routes, document.getElementById('meu-app-aula-06'));
