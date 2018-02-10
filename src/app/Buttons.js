import React, { Component } from 'react';
import Button from '../components/Button';

class Buttons extends Component {

	render() {
		return (
			<div >
				<h1>Buttons</h1>

				{/*we want an empty space at the end*/}
				<div className="grid grid-5">
					<div className="col-4">
						<div className="grid grid-4">
							<Button classes="col-1">Neutral</Button>	
							<Button type="success" classes="col-1">Success</Button>	
							<Button type="information" classes="col-1">Information</Button>	
							<Button type="danger" classes="col-1">Danger</Button>

							<Button type="plain" classes="col-1">Neutral</Button>	
							<Button type="success plain" classes="col-1">Success</Button>	
							<Button type="information plain" classes="col-1">Information</Button>	
							<Button type="danger plain" classes="col-1">Danger</Button>	

							<Button type="text plain" classes="col-1">Neutral</Button>	
							<Button type="success text plain" classes="col-1">Success</Button>	
							<Button type="information text plain" classes="col-1">Information</Button>	
							<Button type="danger text plain" classes="col-1">Danger</Button>	
						</div>
					</div>
				</div>

			</div>
		  );
	}
}

export default Buttons;