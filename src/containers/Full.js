import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Nav from '../components/Nav';

import Typography from '../app/Typography';
import Buttons from '../app/Buttons';
import Cards from '../app/Cards';
import Forms from '../app/Forms';
import Modals from '../app/Modals';
import Navs from '../app/Navs';
import Tables from '../app/Tables';
import Home from '../app/Home';

import logo from '../logo.svg';
import './Full.css';

import { Route, Switch } from 'react-router-dom';


class Full extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}

  	}

	render() {
		return (
			<div className={"container " + this.state.body}>

				<div className="header vertical-align">
					<NavLink to="/"><img alt="logo" src={logo} className="logo"/></NavLink>
					<Nav 
						classes="horizontal margin-left-more"
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
						<Button type="success">Create</Button>	
						<Button type="text plain" classes="margin-left">user</Button>	
					</div>
				</div>

				<div className="content">
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