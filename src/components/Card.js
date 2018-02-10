import React, { Component } from 'react';
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
		const textClass = ["text-", this.state.state].join("");
		return (
			<div className={classes}>
				<div className="card-content">{this.props.children}</div>
				{this.state.footer && 
					<div className="card-footer">{this.state.footer}</div>					
				}
			</div>
		  );
	}
}


export default Card;