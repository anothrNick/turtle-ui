import React, { Component } from 'react';

class Typography extends Component {

	render() {
		return (
			<div >
				<h1>Typography</h1>
				
				<h2>Headers</h2>

				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
				<h4>Header 4</h4>
				<h5>Header 5</h5>
				<h6>Header 6</h6>

				<h2>Weight</h2>
				<p><strong>strong element has a weight of 400</strong></p>
				<p className="text-300">Font weight 300</p>
				<p className="text-400">Font weight 400</p>
				<p className="text-600">Font weight 600</p>


				<h2>Text</h2>
				<p>Normal text</p>
				<p className="text-success">Successful text</p>
				<p className="text-information">Informational text</p>
				<p className="text-danger">Dangerous text</p>
				<p className="background-success padding text-400">Successful text</p>
				<p className="background-information padding text-400">Informational text</p>
				<p className="background-danger padding text-400">Dangerous text</p>
			</div>
		  );
	}
}

export default Typography;