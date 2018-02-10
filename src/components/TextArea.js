import React, { Component } from 'react';
import './TextArea.css';


class TextArea extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  placeholder: props.placeholder ? props.placeholder : "placeholder",
		  label: props.label ? props.label : "",
		  message: props.message ? props.message : "",
		  state: props.state ? props.state : "",
		  classes: props.classes ? props.classes : "",
		  rows: props.rows ? props.rows : 4,
		  value: props.value ? props.value : ""
		}

	}

	render() {
		const classes = ["textarea",this.state.classes,this.state.state].join(" ");
		const textClass = ["text-", this.state.state].join("");
		return (
			<label>
				<span><strong>{this.state.label}</strong></span>
		    	<textarea className={classes} placeholder={this.state.placeholder} rows={this.state.rows}>{this.state.value}</textarea>
		    	<span className={textClass}>{this.state.message}</span>
		 	</label>
		  );
	}
}


export default TextArea;