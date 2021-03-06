import React, { Component } from 'react';
import {Nav, Card} from 'turtle-ui';


class Navs extends Component {

	render() {
		const testLinks = [
			{to: '/navs#one', text: 'Item One'},
			{to: '/navs', text: 'Item Two'},
			{to: '/navs#three', text: 'Item Three'},
		];

		return (
			<div >
				<h1>Navs</h1>

				<h2>Horizontal Nav</h2>
				<div className="grid grid-1">
					<Nav 
						classes="horizontal link-underline underline align-center"
						links={testLinks}
					/>
					<Card state="alert" classes="center"><p className="text-muted">Content</p></Card>
				</div>

				<br/>
				<h2>Horizontal Nav - <small>pull right</small></h2>
				<div className="grid grid-1">
					<Nav 
						classes="horizontal link-underline underline pull-right"
						links={testLinks}
					/>					
					<Card state="alert" classes="center"><p className="text-muted">Content</p></Card>
				</div>

				<br/>
				<h2>Horizontal Nav - <small>no underline</small></h2>
				<div className="grid grid-1">
					<Nav 
						classes="horizontal "
						links={testLinks}
					/>
					<Card state="alert" classes="center"><p className="text-muted">Content</p></Card>
				</div>

				<br/>
				<h2>Vertical Nav</h2>
				<div className="grid grid-5">
					<Nav 
						classes="vertical grid grid-1"
						links={testLinks}
					/>
					<Card state="alert" classes="center col-4"><p className="text-muted">Content</p></Card>
				</div>

				<br/>
				<h2>Vertical Nav - <small>align text right</small></h2>
				<div className="grid grid-5">
					<Nav 
						classes="vertical grid grid-1 align-right"
						links={testLinks}
					/>
					<Card state="alert" classes="center col-4"><p className="text-muted">Content</p></Card>
				</div>

				<br/>
				<h2>Vertical Nav - <small>right side</small></h2>
				<div className="grid grid-5">
					<Card state="alert" classes="center col-4"><p className="text-muted">Content</p></Card>
					
					<Nav 
						classes="vertical grid grid-1"
						links={testLinks}
					/>
				</div>
			</div>
		  );
	}
}

export default Navs;