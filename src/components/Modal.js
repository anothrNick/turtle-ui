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
					<div className="grid grid-3">
						<div className="col-3-2">
							<div className="grid grid-1">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>

				<div className={backdropClasses} onClick={this.close}></div>
			</div>
		  );
	}
}


export default Modal;