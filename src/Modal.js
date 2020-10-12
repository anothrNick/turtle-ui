import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes ? props.classes : "",
    };
  }

  render() {
    var show = this.props.isOpen ? "show" : "";
    var classes = this.props.overrideClasses ? "modal" : "modal center";
    const modalClasses = [classes, this.state.classes, show].join(" ");
    const backdropClasses = ["backdrop", show].join(" ");
    return (
      <div>
        <div className={modalClasses}>{this.props.children}</div>

        <div className={backdropClasses} onClick={this.props.close}></div>
      </div>
    );
  }
}

export default Modal;
