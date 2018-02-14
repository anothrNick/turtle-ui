import React, { Component } from 'react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import List from '../components/List';
import ListItem from '../components/ListItem';

import user from '@fortawesome/fontawesome-free-solid/faUser';
import database from '@fortawesome/fontawesome-free-solid/faDatabase';
import siteMap from '@fortawesome/fontawesome-free-solid/faSitemap';
import tasks from '@fortawesome/fontawesome-free-solid/faTasks';

class Lists extends Component {

	render() {
		const testLinks = [
			{to: '/navs#one', text: 'Item One'},
			{to: '/navs', text: 'Item Two'},
			{to: '/navs#three', text: 'Item Three'},
		];

		return (
			<div >
				<h1>Lists</h1>
				<div className="grid grid-4">
					<List>
						<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
						<ListItem icon={database} title="Create Database" description="Spin it up"/>
						<ListItem icon={siteMap} title="Site Map" description="No idea... a site map"/>
						<ListItem icon={tasks} title="Tasks" description="Manage tasks"/>
					</List>
				</div>
			</div>
		  );
	}
}

export default Lists;