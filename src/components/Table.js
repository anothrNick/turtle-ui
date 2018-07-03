import React, { Component } from 'react';
import './Table.css';


class Table extends Component {

	onClick = () => {

	}

	render() {
		const classes = ["table", this.props.classes].join(" ");
		return (
			<table className={classes}>
				{this.props.headers && this.props.headers.length > 0 &&
					<thead>
						<tr>
						{this.props.headers.map(function(header, index){
							return (
								<th key={"table_header_"+index}>{header}</th>
							)
						})}
						</tr>
					</thead>
				}
				<tbody>
					{this.props.values.map(function(row, index){
						return (
							<tr key={"table_body_"+index} onClick={() => (this.props.onClick ? this.props.onClick(index) : this.onClick)}>
								{row.map(function(value, column){
									return (
										<td key={"table_body_row_"+index+"_"+column}>{value}</td>
									)
								})}
							</tr>
						)
					}, this)}
				</tbody>
			</table>
		  );
	}
}


export default Table;