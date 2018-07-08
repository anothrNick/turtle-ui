import React, { Component } from 'react';
import {Table} from 'turtle-ui';

class Tables extends Component {

	render() {
		const headers = [
			"Name",
			"Home",
			"Active",
			"Age"
		];

		const values = [
			["African Aquatic Sideneck Turtle", "Africa", "Daytime", "25 years"],
			["Central American Wood Turtle", "Mexico, Costa Rica", "", ""],
			["Painted Turtle", "North America", "Daytime", "55 years"],
			["Red Ear Slider Turtle", "Gulf of Mexico", "", "50-70 years"],
			["Reeve’s Turtle", "China, North and South Korea", "", "10-15 years"],
		]

		return (
			<div >
				<h1>Tables</h1>

				<div className="grid grid-1">
					<Table 
						classes="hover"
						headers={headers}
						values={values}
					/>
				</div>
			</div>
		  );
	}
}

export default Tables;