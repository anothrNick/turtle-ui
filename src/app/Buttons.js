import React, { Component } from 'react';
import Button from '../components/Button';

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

				<br/>

				<h2>React Component</h2>
<pre>{`
import Button from 'components/Button';

class App extends Component {
	render() {
		<Button>Neutral</Button>	
		<Button type="success">Success</Button>	
		<Button type="information">Information</Button>	
		<Button type="danger">Danger</Button>

		<Button type="plain">Neutral</Button>	
		<Button type="success plain">Success</Button>	
		<Button type="information plain">Information</Button>	
		<Button type="danger plain">Danger</Button>	
	}
}
`}</pre>


				<h2>CSS</h2>
<pre>{`
<link rel="stylesheet" type="text/css" href="/css/Buttons.css">

<button className="button">Neutral</button>
<button className="success button">Neutral</button>
<button className="information button">Neutral</button>
<button className="danger button">Neutral</button>

<button className="plain button">Neutral</button>
<button className="success plain button">Neutral</button>
<button className="information plain button">Neutral</button>
<button className="danger plain button">Neutral</button>

`}</pre>

			</div>
		  );
	}
}

export default Buttons;