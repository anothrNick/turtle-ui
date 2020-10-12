import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import faUp from "@fortawesome/fontawesome-free-solid/faChevronUp";
import Button from "./Button.js";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showIcon: this.props.showIcon === true,
      disableClickClose: this.props.disableClickClose,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  // close dropdown if clicked outside of component
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isOpen && !this.state.disableClickClose)
        this.setState({ isOpen: false });
    }
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    var width = this.props.width ? this.props.width : 300;
    var show = this.state.isOpen ? "show" : "";
    var icon = this.state.isOpen ? faUp : faDown;

    const classes = ["dropdown", this.props.classes].join(" ");
    const itemClasses = ["dropdown-items", show].join(" ");
    const buttonClasses = ["full-width", this.props.buttonClasses].join(" ");
    const styles = {
      width: width + "px",
    };
    var itemsClick = this.props.disableClickClose
      ? function () {}
      : this.toggle;

    return (
      <div className={classes} ref={this.setWrapperRef}>
        <Button
          classes={buttonClasses + " " + (this.props.type || "")}
          style={this.props.buttonStyle}
          onClick={this.toggle}
        >
          {this.props.buttonText}{" "}
          {this.state.showIcon && <FontAwesomeIcon icon={icon} />}
        </Button>
        <div className={itemClasses} style={styles} onClick={itemsClick}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
