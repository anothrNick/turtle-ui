import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircleNotch';

import './Button.css';


class Button extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}

	}

	render() {
		const classes = ["button", this.props.classes].join(" ");
		const disabled = (this.props.loading === true);
		return (
			<button style={this.props.style} disabled={disabled} className={classes} onClick={this.props.onClick} type={this.props.type || 'button'}>
				{disabled && <FontAwesomeIcon className="fa-spin" icon={faCircle} />}
				{!disabled && this.props.children}
			</button>
		  );
	}
}


export default Button;