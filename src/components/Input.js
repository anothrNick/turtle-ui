import React, { Component } from 'react';
import './Input.css';


class Input extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  placeholder: props.placeholder ? props.placeholder : "placeholder",
		  type: props.type ? props.type : "text",
		  label: props.label ? props.label : "",
		  message: props.message ? props.message : "",
		  state: props.state ? props.state : "",
		  classes: props.classes ? props.classes : "",
		  value: props.value ? props.value : ""
		}

	}

	render() {
		const classes = ["input",this.state.classes,this.state.state].join(" ");
		const textClass = ["text-", this.state.state].join("");
		return (
			<label>
				<span><strong>{this.state.label}</strong></span>
		    	<input className={classes} placeholder={this.state.placeholder} type={this.state.type} value={this.state.value}/>
		    	<span className={textClass}>{this.state.message}</span>
		 	</label>
		  );
	}
}


export default Input;