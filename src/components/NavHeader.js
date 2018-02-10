import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NavHeader.css';


class NavHeader extends Component {

	render() {
		return (
			<div className="header vertical">
				{this.props.children}
			</div>
		  );
	}
}

export default NavHeader;