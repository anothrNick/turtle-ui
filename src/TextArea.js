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
		  onChange: props.onChange ? props.onChange : this.onChange,
		  name: props.name ? props.name : ""
		}
	}

	onChange = (event) => {

	}

	render() {
		const classes = ["textarea",this.state.classes,this.state.state].join(" ");
		const textClass = ["text-", this.state.state].join("");
		return (
			<label>
				<span><strong>{this.state.label}</strong></span>
				{this.props.description}
				<textarea 
					className={classes} 
					name={this.state.name} 
					placeholder={this.state.placeholder} 
					rows={this.state.rows} 
					value={this.props.value} 
					onChange={this.state.onChange}
					data-key={this.props["data-key"]}
					data-value={this.props["data-value"]}
					/>
		    	<span className={textClass}>{this.state.message}</span>
		 	</label>
		  );
	}
}


export default TextArea;