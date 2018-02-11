import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  classes: props.classes ? props.classes : ""
		}

	}

	render() {
		if (this.props.isOpen === false)
        	return null;

		const classes = ["modal center show", this.state.classes].join(" ");
		return (
			<div>
				<div className={classes}>
					<div className="grid grid-3">
						<div className="col-3-2">
							<div className="grid grid-1">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>

				<div className="backdrop"></div>
			</div>
		  );
	}
}


export default Modal;