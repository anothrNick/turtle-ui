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
		  options: props.options ? props.options : [],
		  name: props.name ? props.name : ""
		}

	}

	render() {
		const classes = ["select",this.state.classes,this.state.state].join(" ");
		const textClass = ["text-", this.state.state].join("");
		const labelClass = ["", this.props.labelClasses].join("");
		return (
			<label className={labelClass}>
				<span><strong>{this.state.label}</strong></span>
				{this.props.description}
				<div className="select-span">
						<select 
							className={classes} 
							name={this.state.name} 
							type={this.state.type} 
							value={this.props.value} 
							onChange={this.props.onChange}
							data-key={this.props["data-key"]}
							data-value={this.props["data-value"]}
							>
	        			<option value="" disabled hidden>{this.state.placeholder}</option>
	        			{this.state.options.map(function(option, i) {
	        				return (
	        					<option key={option.value + i + "_select"} value={option.value} >{option.text}</option>
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