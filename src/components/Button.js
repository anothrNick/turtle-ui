import React, { Component } from 'react';
import './Button.css';


class Button extends Component {

	render() {
		return (
			<button className={this.props.type + " button "}>{this.props.children}</button>
		  );
	}
}


export default Button;