import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import './Select.css';


class Select extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  placeholder: props.placeholder ? props.placeholder : "placeholder",
		  type: props.type ? props.type : "text",
		  label: props.label ? props.label : "",
		  message: props.message ? props.message : "",
		  state: props.state ? props.state : "",
		  classes: props.classes ? props.classes : "",
		  options: props.options ? props.options : []
		}

	}

	render() {
		const classes = ["select",this.state.classes,this.state.state].join(" ");
		const textClass = ["text-", this.state.state].join("");
		return (
			<label>
				<span><strong>{this.state.label}</strong></span>
				<div className="select-span">
			    	<select className={classes} type={this.state.type}>
	        			<option value="" disabled selected hidden>{this.state.placeholder}</option>
	        			{this.state.options.map(function(option) {
	        				return (
	        					<option value={option.value} selected={this.props.value === option.value}>{option.text}</option>
	        				)
	        			}, this)}
			    	</select>
		    		<FontAwesomeIcon icon={faDown} />
		    	</div>
		    	<span className={textClass}>{this.state.message}</span>
		 	</label>
		  );
	}
}


export default Select;