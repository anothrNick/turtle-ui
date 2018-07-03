import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';


class Card extends Component {

	render() {
		const classes = [
							"card",
							(this.props.classes ? this.props.classes : ""),
							(this.props.state ? this.props.state : "")
						].join(" ");

		var card;

		if (this.props.to) {
			card = <NavLink to={this.props.to} className={classes}>
						<div className="card-content">{this.props.children}</div>
						{this.props.footer && 
							<div className="card-footer">{this.props.footer}</div>					
						}
					</NavLink>
		}
		else {
			card = <div className={classes} onClick={this.props.onClick} id={this.props.id || ""}>
						<div className="card-content" style={this.props.style || {}}>{this.props.children}</div>
						{this.props.footer && 
							<div className="card-footer">{this.props.footer}</div>					
						}
					</div>
		}

		return card;
	}
}


export default Card;