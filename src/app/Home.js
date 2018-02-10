import React, { Component } from 'react';

class Home extends Component {

	render() {
		return (
			<div >
				<h1>Turtle UI</h1>
				<p>Turtle UI is a CSS framework and collection of React components based on minimalism. Use Turtle UI to build your next project!</p>
				<h3>Components</h3>
				<ul className="list">
					<li>Grid</li>
					<li>Typography</li>
					<li>Buttons</li>
					<li>Forms</li>
					<li>Cards</li>
					<li>Tables</li>
					<li>Modals</li>
					<li>Navs</li>
				</ul>
			</div>
		  );
	}
}

export default Home;