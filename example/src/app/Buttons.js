import React, { Component } from 'react';
import { Button, Dropdown, List, ListItem} from 'turtle-ui';

import user from '@fortawesome/fontawesome-free-solid/faUser';
import database from '@fortawesome/fontawesome-free-solid/faDatabase';
import siteMap from '@fortawesome/fontawesome-free-solid/faSitemap';
import tasks from '@fortawesome/fontawesome-free-solid/faTasks';

class Buttons extends Component {

	render() {
		return (
			<div >
				<h1>Buttons</h1>
				<br/>
				{/*we want an empty space at the end*/}
				<div className="grid grid-5">
					<div className="col-3">
						<div className="grid grid-3">
							<Button>Neutral</Button>
							<Button classes="brand">Brand</Button>
							<Button classes="accent">Accent</Button>

							<Button classes="plain">Neutral</Button>
							<Button classes="brand plain">Brand</Button>
							<Button classes="accent plain">Accent</Button>

							<Button classes="text plain">Neutral</Button>
							<Button classes="brand text plain">Brand</Button>
							<Button classes="accent text plain">Accent</Button>
						</div>
					</div>

					<div className="col-4 margin-top-more">
						<div className="grid grid-4">
							<Button classes="success">Success</Button>	
							<Button classes="information">Information</Button>
							<Button classes="warning">Warning</Button>
							<Button classes="danger">Danger</Button>

							<Button classes="success plain">Success</Button>	
							<Button classes="information plain">Information</Button>		
							<Button classes="warning plain">Warning</Button>
							<Button classes="danger plain">Danger</Button>

							<Button classes="success text plain">Success</Button>	
							<Button classes="information text plain">Information</Button>	
							<Button classes="warning text plain">Warning</Button>	
							<Button classes="danger text plain">Danger</Button>	
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
								buttonClasses="text plain">
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
								buttonClasses="brand plain">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
								</List>
							</Dropdown>

							<Dropdown 
								width={300}
								showIcon={true}
								buttonText="Align Left"
								classes="col-1 align-items-left"
								buttonClasses="information">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
								</List>
							</Dropdown>


							<Dropdown 
								width={300}
								showIcon={true}
								clickClose={false}
								buttonText="No Click Close"
								classes="col-1"
								buttonClasses="plain">
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