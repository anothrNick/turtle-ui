import React, { Component } from 'react';
import Button from '../components/Button'

class Buttons extends Component {

	render() {
		return (
			<div >
				<h1>Buttons</h1>

				<div className="grid-container">
					<Button>Neutral</Button>	
					<Button type="success">Success</Button>	
					<Button type="information">Information</Button>	
					<Button type="danger">Danger</Button>
					<span></span>

					<Button type="plain">Neutral</Button>	
					<Button type="success plain">Success</Button>	
					<Button type="information plain">Information</Button>	
					<Button type="danger plain">Danger</Button>	
					<span></span>
				</div>

			</div>
		  );
	}
}

export default Buttons;