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
		// if (this.props.isOpen === false)
  		//       	return null;

  		var show = this.props.isOpen ? "show" : "";
		const modalClasses = ["modal center", this.state.classes, show].join(" ");
		const backdropClasses = ["backdrop", show].join(" ");
		return (
			<div>
				<div className={modalClasses}>

					{this.props.children}
					
				</div>

				<div className={backdropClasses} onClick={this.props.close}></div>
			</div>
		  );
	}
}


export default Modal;