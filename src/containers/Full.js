import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUserCircle';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import Modal from '../components/Modal';

import Typography from '../app/Typography';
import Buttons from '../app/Buttons';
import Cards from '../app/Cards';
import Forms from '../app/Forms';
import Modals from '../app/Modals';
import Navs from '../app/Navs';
import Tables from '../app/Tables';
import Lists from '../app/Lists';
import Home from '../app/Home';

import List from '../components/List';
import ListItem from '../components/ListItem';

import user from '@fortawesome/fontawesome-free-solid/faUser';
import database from '@fortawesome/fontawesome-free-solid/faDatabase';
import siteMap from '@fortawesome/fontawesome-free-solid/faSitemap';
import tasks from '@fortawesome/fontawesome-free-solid/faTasks';
import cog from '@fortawesome/fontawesome-free-solid/faCog';
import address from '@fortawesome/fontawesome-free-solid/faAddressCard';
import bars from '@fortawesome/fontawesome-free-solid/faBars';
import times from '@fortawesome/fontawesome-free-solid/faTimes';

import logo from '../logo.svg';
import './Full.css';

import { Route, Switch } from 'react-router-dom';


class Full extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: "",
		  sidebar: false
		}

  	}

	toggleSidebar = () => {
		var body = !this.state.sidebar ? "modal-open" : "";
		this.setState({sidebar: !this.state.sidebar, body: body});
	}

	render() {
		return (
			<div className={"container " + this.state.body}>
				

				<div className="header vertical-align">
					<NavLink to="/"><img alt="logo" src={logo} className="logo"/></NavLink>
					<div className="show-small">
						<Button type="plain" classes="text plain no-click" onClick={this.toggleSidebar}><FontAwesomeIcon icon={bars} /></Button>	
					</div>
					<Nav 
						classes="horizontal margin-left-more hidden-small"
						links={[
								{to: "/typography", text: "Typography"},
								{to: "/buttons", text: "Buttons"},
								{to: "/forms", text: "Forms"},
								{to: "/cards", text: "Cards"},
								{to: "/tables", text: "Tables"},
								{to: "/modals", text: "Modals"},
								{to: "/navs", text: "Navs"}
							]}
					/>

					<div className="user-nav">
						<Dropdown 
							showIcon={true}
							type="success"
							width={250}
							buttonText="Create"
							classes="col-1">
							<div className="grid grid-1">
								<List>
									<ListItem icon={user} title="Add User" description="Add a user for this demo"/>
									<ListItem icon={database} title="Create Database" description="Spin it up"/>
									<ListItem icon={siteMap} title="Site Map" description="No idea... a site map"/>
									<ListItem icon={tasks} title="Tasks" description="Manage tasks"/>
								</List>
							</div>
						</Dropdown>

						<Dropdown 
							type="text plain"
							width={200}
							buttonText={<FontAwesomeIcon style={{fontSize: "32px"}} icon={faUser} />}
							buttonClasses={"no-click"}
							classes="col-1 align-items-right">
							<div className="grid grid-1">
								<List>
									<ListItem icon={address} title="Profile" description="Manage your profile"/>
									<ListItem icon={cog} title="Settings" description="Edit settings"/>
								</List>
							</div>
						</Dropdown>
					</div>
				</div>

				<div className="content responsive">
					<Modal
						classes="from-left"
						close={this.toggleSidebar}
						isOpen={this.state.sidebar}>

						<div className="grid grid-2 full-height">
							<Card classes="col-1 footer-plain">
								<div className="grid grid-2">
							    	<div className="col-2 col-right">
										<Button type="plain text" onClick={this.toggleSidebar}><FontAwesomeIcon icon={times} /></Button>	
							    	</div>
								</div>

								<Nav 
									classes="vertical grid grid-1"
									links={[
											{to: "/typography", text: "Typography"},
											{to: "/buttons", text: "Buttons"},
											{to: "/forms", text: "Forms"},
											{to: "/cards", text: "Cards"},
											{to: "/tables", text: "Tables"},
											{to: "/modals", text: "Modals"},
											{to: "/navs", text: "Navs"}
										]}
								/>
							</Card>
						</div>
					</Modal>

					<Switch>
						<Route 
							path="/" 
							exact 
							component={() => <Home />}
							/>

						<Route 
							path="/typography" 
							exact 
							component={() => <Typography />}
							/>

						<Route 
							path="/buttons" 
							exact 
							component={() => <Buttons />}
							/>

						<Route 
							path="/forms" 
							exact 
							component={() => <Forms />}
							/>

						<Route 
							path="/cards" 
							exact 
							component={() => <Cards />}
							/>

						<Route 
							path="/tables" 
							exact 
							component={() => <Tables />}
							/>

						<Route 
							path="/modals" 
							exact 
							component={() => <Modals />}
							/>

						<Route 
							path="/navs" 
							exact 
							component={() => <Navs />}
							/>

						<Route 
							path="/lists" 
							exact 
							component={() => <Lists />}
							/>
					</Switch>

				</div>

				<Footer />
			</div>
		  );
	}
}

// Add this function:
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Full);