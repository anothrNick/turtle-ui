import React, { Component } from 'react';
import './Switch.css';


class Switch extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  label: props.label ? props.label : "",
		  message: props.message ? props.message : "",
		  classes: props.classes ? props.classes : "",
		  state: props.state ? props.state : "",
		  name: props.name ? props.name : "",
          shape: props.shape ? props.shape : "round"
		}

	}

	render() {
		const classes = ["checkbox",this.state.classes,this.state.state].join(" ");
		const textClass = ["text-", this.state.state].join("");
        const labelClass = ["switch ", this.state.labelClasses].join("");
        const shape = this.state.shape;
        var on = this.props.on ? this.props.on : false;
		return (
            <label className={labelClass} >
                <input type="checkbox" className={classes} name={this.props.name} checked={on} onChange={this.props.onChange}/>
                <span className={"slider " + shape}></span>
                <span className={textClass}>{this.state.message}</span>
            </label>
		  );
	}
}


export default Switch;