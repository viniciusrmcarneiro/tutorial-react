import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>APP</h2>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

export default App;
