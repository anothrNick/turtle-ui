import React, { Component } from 'react';
import Card from '../components/Card';

class Home extends Component {

	render() {

		const cardStyles = "hover click";

		return (
			<div >
				<h1>Turtle UI</h1>
				<p>Turtle UI is a CSS framework and collection of React components based on minimalism. Use Turtle UI to build your next project!</p>
				
				<h2>Components</h2>
				<div className="grid grid-4">
					<Card classes={cardStyles} to="/buttons"><span className="text-300">Buttons</span></Card>
					<Card classes={cardStyles} to="/forms"><span className="text-300">Forms</span></Card>

					<Card classes={cardStyles} to="/cards"><span className="text-300">Cards</span></Card>
					<Card classes={cardStyles} to="/tables"><span className="text-300">Tables</span></Card>
					<Card classes={cardStyles} to="/modals"><span className="text-300">Modals</span></Card>
					<Card classes={cardStyles} to="/navs"><span className="text-300">Navs</span></Card>
				</div>

				<h2>Style</h2>
				<div className="grid grid-4">
					<Card classes={cardStyles} to="/grid"><span className="text-300">Grid</span></Card>
					<Card classes={cardStyles} to="/typography"><span className="text-300">Typography</span></Card>
				</div>
			</div>
		  );
	}
}

export default Home;