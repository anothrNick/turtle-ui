import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/NavHeader';
import Button from '../components/Button';

import Typography from '../app/Typography';
import Buttons from '../app/Buttons';
import Cards from '../app/Cards';
import Forms from '../app/Forms';
import Modals from '../app/Modals';
import Navs from '../app/Navs';
import Tables from '../app/Tables';
import Home from '../app/Home';

import logo from '../logo.svg';

import { Route, Switch } from 'react-router-dom';


class Full extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}

  	}

	componentDidMount = () => {		

	}

	render() {
		return (
			<div className={"container " + this.state.body}>
				<Header {...this.props}>
					<NavLink to="/"><img alt="logo" src={logo} className="logo"/></NavLink>
					<div className="nav">
						<NavLink to="/typography" activeClassName="active">Typography</NavLink>
						<NavLink to="/buttons" activeClassName="active">Buttons</NavLink>
						<NavLink to="/forms" activeClassName="active">Forms</NavLink>
						<NavLink to="/cards" activeClassName="active">Cards</NavLink>
						<NavLink to="/tables" activeClassName="active">Tables</NavLink>
						<NavLink to="/modals" activeClassName="active">Modals</NavLink>
						<NavLink to="/navs" activeClassName="active">Navs</NavLink>
					</div>

					<div className="user-nav">
						<Button type="success">Create</Button>	
						<Button type="text plain" classes="margin-left">user</Button>	
					</div>
				</Header>

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