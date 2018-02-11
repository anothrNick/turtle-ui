import React, { Component } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';

class Modals extends Component {

	constructor(props) {
		super(props);

		this.state = {
			openModal: false
		}
	}

	open = () => {
		this.setState({openModal: true});
	}

	close = () => {
		this.setState({openModal: false})
	}

	render() {
		return (
			<div >
				<h1>Modals</h1>

				<Button type="information plain" classes="col-1" onClick={this.open}>Open Modal</Button>	

				<Modal 
					close={this.close}
					isOpen={this.state.openModal}>
					<Card 
						classes="footer-plain"
						footer={
							<div className="grid grid-2">
						    	<div className="col-2 col-right">
									<Button type="plain text" onClick={this.close}>Cancel</Button>	
									<Button type="information plain" classes="margin-left" onClick={this.close}>Submit</Button>	
						    	</div>
							</div>
						}>
						<h2>Card Header</h2>
						<p>Example of a card with a header</p>
					</Card>
				</Modal>
			</div>
		  );
	}
}

export default Modals;