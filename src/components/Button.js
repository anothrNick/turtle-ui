import React, { Component } from 'react';
import './Button.css';


class Button extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}

	}

	render() {
		const classes = ["button",this.props.type,this.props.classes].join(" ");
		return (
			<button className={classes}>{this.props.children}</button>
		  );
	}
}


export default Button;