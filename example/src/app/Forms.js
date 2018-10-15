import React, { Component } from 'react';
import {Input, Select, TextArea, Button, Switch} from 'turtle-ui';

class Forms extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checkOne: false,
			checkTwo: true
		};
	}

	toggleSwitch = (event) => {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		var checkValue = this.state[name];

		this.setState({
			[name]: !checkValue
		});
	}

	render() {
		const options = [{value: "1", text: "one"},{value: "2", text: "two"}]

		return (
			<div >
				<h1>Forms</h1>

				<div className="grid grid-3">
			    	<Input placeholder="a text input" />
			    	<Select placeholder="a select" options={options}/>

			    	<div className="col-2">
			    		<div className="grid grid-1">
			    			<TextArea placeholder="a text area" />
			    		</div>
			    	</div>

					<div></div>
					<Switch label="Switch" name="checkOne" on={this.state.checkOne} onChange={this.toggleSwitch}/>
					<Switch label="Switch" name="checkTwo" on={this.state.checkTwo} onChange={this.toggleSwitch}/>
				</div>
				<br/>
				<div className="grid grid-3 margin-top-more">
			    	<Input placeholder="a text input" label="Label" value="test value"/>
			    	<Select placeholder="a select" label="Label" options={options} value="1"/>
			    	<div className="col-2">
			    		<div className="grid grid-1">
			    			<TextArea placeholder="a text area" label="Label" value="test value"/>
			    		</div>
			    	</div>
				</div>


				<br/>
				<h2>Message</h2>
				<div className="grid grid-2">
			    	<Input placeholder="a text input" message="a more descriptive message" />
			    	<Select placeholder="a select" options={options} message="a more descriptive message" />

			    	<div className="col-2 col-right">
						<Button classes="text plain">Cancel</Button>	
						<Button classes="margin-left information">Submit</Button>	
			    	</div>
				</div>

				<br/>
				<h2>State</h2>
				<div className="grid grid-2">
			    	<Input placeholder="a text input" state="success" message="success message"/>
			    	<Select placeholder="a select" options={options} state="success" message="success message"/>

			    	<Input placeholder="a text input" state="information" message="info message"/>
			    	<Select placeholder="a select" options={options} state="information" message="success message"/>

			    	<Input placeholder="a text input" state="danger" message="danger message"/>
			    	<Select placeholder="a select" options={options} state="danger" message="danger message"/>

			    	<div className="col-2 col-right">
						<Button classes="text plain">Cancel</Button>	
						<Button classes="margin-left information">Submit</Button>	
			    	</div>
				</div>

			</div>
		  );
	}
}

export default Forms;