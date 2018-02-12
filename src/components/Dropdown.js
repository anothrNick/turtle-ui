import React, { Component } from 'react';
import Button from './Button.js'
import './Dropdown.css';


class Dropdown extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  isOpen: false
		}
	}

	toggle = () => {
		this.setState({isOpen: !this.state.isOpen})
	}

	render() {
		var width = this.props.width ? this.props.width : 300;
		var show = this.state.isOpen ? "show" : "";

		const classes = ["dropdown", this.props.classes].join(" ");
		const itemClasses = ["dropdown-items", show].join(" ");
		const styles = {
			"width": width + "px"
		}

		return (
			<div className={classes}>
				<Button classes="full-width" type={this.props.type || "information"} onClick={this.toggle}>{this.props.buttonText}</Button>
				<div className={itemClasses} style={styles}>
					{this.props.children}
				</div>
			</div>
		  );
	}
}


export default Dropdown;