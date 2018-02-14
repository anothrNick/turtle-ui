import React, { Component } from 'react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Nav from '../components/Nav';

import List from '../components/List';
import ListItem from '../components/ListItem';

import user from '@fortawesome/fontawesome-free-solid/faUser';
import database from '@fortawesome/fontawesome-free-solid/faDatabase';
import siteMap from '@fortawesome/fontawesome-free-solid/faSitemap';
import tasks from '@fortawesome/fontawesome-free-solid/faTasks';

class Buttons extends Component {

	render() {
		const testLinks = [
			{to: '/navs#one', text: 'Item One'},
			{to: '/navs', text: 'Item Two'},
			{to: '/navs#three', text: 'Item Three'},
		];

		return (
			<div >
				<h1>Buttons</h1>
				<br/>
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

				<br/>
				<h2>Dropdown Button</h2>
				<div className="grid grid-5">
					<div className="col-4">
						<div className="grid grid-4">
							<Dropdown 
								width={300}
								showIcon={true}
								buttonText="Open Dropdown"
								classes="col-1">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
									<ListItem icon={database} title="Create Database" description="Spin it up"/>
									<ListItem icon={siteMap} title="Site Map" description="No idea... a site map"/>
									<ListItem icon={tasks} title="Tasks" description="Manage tasks"/>
								</List>
							</Dropdown>
						</div>
					</div>
				</div>			

			</div>
		  );
	}
}

export default Buttons;