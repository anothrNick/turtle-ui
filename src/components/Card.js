import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';


class Card extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  state: props.state ? props.state : "",
		  classes: props.classes ? props.classes : "",
		  footer: props.footer
		}

	}

	render() {
		const classes = ["card",this.state.classes,this.state.state].join(" ");

		var card;

		if (this.props.to) {
			card = <NavLink to={this.props.to} className={classes}>
						<div className="card-content">{this.props.children}</div>
						{this.state.footer && 
							<div className="card-footer">{this.state.footer}</div>					
						}
					</NavLink>
		}
		else {
			card = <div className={classes}>
						<div className="card-content">{this.props.children}</div>
						{this.state.footer && 
							<div className="card-footer">{this.state.footer}</div>					
						}
					</div>
		}

		return card;
	}
}


export default Card;