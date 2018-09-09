import React, { Component } from 'react';
import './Table.css';


class Table extends Component {

	onClick = () => {

	}

	render() {
		const classes = ["table", this.props.classes].join(" ");
		var colSpan = (this.props.values && this.props.values.length > 0) ? this.props.values[0].length : ((this.props.headers && this.props.headers.length > 0) ? this.props.headers.length : 1);
		return (
			<table className={classes}>
				{((this.props.headers && this.props.headers.length > 0) || (this.props.title)) &&
					<thead>
						{this.props.title &&
							<tr>
								<th colSpan={colSpan} key="table_header_title_01">{this.props.title}</th>
							</tr>
						}
						{this.props.headers && this.props.headers.length > 0 &&
							<tr>
							{this.props.headers.map(function(header, index){
								return (
									<th key={"table_header_"+index}>{header}</th>
								)
							})}
							</tr>
						}
					</thead>
				}
				<tbody>
					{this.props.values && this.props.values.map(function(row, index){
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

				{this.props.footer &&
					<tfoot>
						<tr>
							<td colSpan={colSpan} key={"table_footer_01"}>{this.props.footer}</td>
						</tr>
					</tfoot>
				}
			</table>
		  );
	}
}

export default Table;