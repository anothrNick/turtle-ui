import React, { Component } from 'react';
import './List.css';


class List extends Component {

	constructor(props) {
	    super(props);
		this.state = {

		}   
	}

	render() {
		const classes = ["list", this.props.classes].join(" ");

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		  );
	}
}


export default List;