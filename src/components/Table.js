import React, { Component } from 'react';
import './Table.css';


class Table extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  classes: props.classes ? props.classes : "",
		  headers: props.headers ? props.headers : [],
		  values: props.values ? props.values : []
		}

	}

	render() {
		const classes = ["table",this.state.classes,this.state.state].join(" ");
		return (
			<table className={classes}>
				{this.state.headers.length > 0 &&
					<thead>
						<tr>
						{this.state.headers.map(function(header){
							return (
								<th>{header}</th>
							)
						})}
						</tr>
					</thead>
				}
				<tbody>
					{this.state.values.map(function(row){
						return (
							<tr>
								{row.map(function(value){
									return (
										<td>{value}</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		  );
	}
}


export default Table;