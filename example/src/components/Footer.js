import React, { Component } from 'react';


class Footer extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}

  	}

	componentDidMount = () => {		

	}

	render() {
		return (
			<div className="footer">
				&copy; {new Date().getFullYear()} Turtle UI
			</div>
		  );
	}
}


export default Footer;