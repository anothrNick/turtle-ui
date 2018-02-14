import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './List.css';

class ListItem extends Component {

	constructor(props) {
	    super(props);
		this.state = {

		}   
	}

	render() {
		const classes = ["list-item", this.props.classes].join(" ");

		return (
			<div className={classes} onClick={this.props.onClick}>
				{this.props.icon && <FontAwesomeIcon className="list-item-image" icon={this.props.icon} />}
				<div className="list-item-content">
					<div className="list-item-title">{this.props.title}</div>
					<div className="list-item-description">{this.props.description}</div>
				</div>
			</div>
		  );
	}
}

export default ListItem;