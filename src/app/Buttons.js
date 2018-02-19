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
					<div className="col-3">
						<div className="grid grid-3">
							<Button>Neutral</Button>
							<Button type="brand">Brand</Button>
							<Button type="accent">Accent</Button>

							<Button type="plain">Neutral</Button>
							<Button type="brand plain">Brand</Button>
							<Button type="accent plain">Accent</Button>

							<Button type="text plain">Neutral</Button>
							<Button type="brand text plain">Brand</Button>
							<Button type="accent text plain">Accent</Button>
						</div>
					</div>

					<div className="col-4 margin-top-more">
						<div className="grid grid-4">
							<Button type="success">Success</Button>	
							<Button type="information">Information</Button>
							<Button type="warning">Warning</Button>
							<Button type="danger">Danger</Button>

							<Button type="success plain">Success</Button>	
							<Button type="information plain">Information</Button>		
							<Button type="warning plain">Warning</Button>
							<Button type="danger plain">Danger</Button>

							<Button type="success text plain">Success</Button>	
							<Button type="information text plain">Information</Button>	
							<Button type="warning text plain">Warning</Button>	
							<Button type="danger text plain">Danger</Button>	
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
								buttonText="Dropdown"
								classes="col-1"
								buttonClasses="text plain"
								type="">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
									<ListItem icon={database} title="Create Database" description="Spin it up"/>
									<ListItem icon={siteMap} title="Site Map" description="No idea... a site map"/>
									<ListItem icon={tasks} title="Tasks" description="Manage tasks"/>
								</List>
							</Dropdown>

							<Dropdown 
								width={300}
								showIcon={true}
								buttonText="Align Right"
								classes="col-1 align-items-right"
								buttonClasses="plain"
								type="brand">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
								</List>
							</Dropdown>

							<Dropdown 
								width={300}
								showIcon={true}
								buttonText="Align Left"
								classes="col-1 align-items-left"
								type="information">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
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