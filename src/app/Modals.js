import React, { Component } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';

class Modals extends Component {

	constructor(props) {
		super(props);

		this.state = {
			openModalOne: false,
			openModalTwo: false
		}
	}

	openOne = () => {
		this.setState({openModalOne: true});
	}

	closeOne = () => {
		this.setState({openModalOne: false})
	}

	openTwo = () => {
		this.setState({openModalTwo: true});
	}

	closeTwo = () => {
		this.setState({openModalTwo: false})
	}

	render() {
		return (
			<div >
				<h1>Modals</h1>

				<div className="grid">
					<Button type="information plain" classes="col-2" onClick={this.openOne}>Open Modal</Button>	
					<Button type="information plain" classes="col-2" onClick={this.openTwo}>Open Modal</Button>	
				</div>

				<Modal 
					close={this.closeOne}
					isOpen={this.state.openModalOne}>
					<Card 
						classes="footer-plain"
						footer={
							<div className="grid grid-2">
						    	<div className="col-2 col-right">
									<Button type="plain text" onClick={this.closeOne}>Cancel</Button>	
									<Button type="information plain" classes="margin-left" onClick={this.closeOne}>Submit</Button>	
						    	</div>
							</div>
						}>
						<h2> Header</h2>
						<p>Example of a card used as the modal body</p>
					</Card>
				</Modal>

				<Modal 
					close={this.closeTwo}
					isOpen={this.state.openModalTwo}>
					<h2>Hello</h2>
					<div className="grid grid-2">
				    	<div className="col-2 col-right">
							<Button type="plain text" onClick={this.closeTwo}>Close</Button>
						</div>
					</div>

				</Modal>
			</div>
		  );
	}
}

export default Modals;