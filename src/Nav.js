import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  classes: props.classes ? props.classes : "",
		  links: props.links ? props.links : []
		}
	}

	render() {
		const classes = ["nav", this.props.classes].join(" ");
		const onClickCallback = this.props.onClickCallback !== undefined ? this.props.onClickCallback : function(){console.log("nav clicked")};
		return (
			<div className={classes}>
				{this.state.links.map(function(link){
					return (
						<NavLink key={link.text} to={link.to} onClick={onClickCallback} activeClassName="active">{link.text}</NavLink>
					)
				})}
			</div>
	  	);
	}
}


export default Nav;