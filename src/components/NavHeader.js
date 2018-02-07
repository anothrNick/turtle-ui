import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './NavHeader.css';
import Button from './Button';


class NavHeader extends Component {

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
			<div className="header vertical">
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
					<span className="item">one</span>	
				</div>
			</div>
		  );
	}
}

// Add this function:
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(NavHeader);