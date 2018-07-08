import React, { Component } from 'react';
import {Card, Button, Modal} from 'turtle-ui';

class Modals extends Component {

	constructor(props) {
		super(props);

		this.state = {
			openModalOne: false,
			openModalTwo: false,
			openModalThree: false
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

	openThree = () => {
		this.setState({openModalThree: true});
	}

	closeThree = () => {
		this.setState({openModalThree: false})
	}

	render() {
		return (
			<div >
				<h1>Modals</h1>

				<div className="grid">
					<Button classes="success plain col-2" onClick={this.openOne}>Card Modal</Button>	
					<Button classes="information plain col-2" onClick={this.openTwo}>Text Modal</Button>	
					<Button classes="plain col-2" onClick={this.openThree}>Sidebar</Button>	
				</div>

				<Modal
					classes="from-left"
					close={this.closeThree}
					isOpen={this.state.openModalThree}>

					<div className="grid grid-4 full-height">
						<Card 
							classes="col-1 footer-plain no-border"
							footer={
								<div className="grid grid-2">
							    	<div className="col-2 col-right">
										<Button classes="plain text" onClick={this.closeThree}>Cancel</Button>	
										<Button classes="information plain margin-left" onClick={this.closeThree}>Submit</Button>	
							    	</div>
								</div>
							}>
							<h2>Sidebar Header</h2>
							<p>Modal as sidebar</p>
							<p>Example of a card used as the modal body</p>
						</Card>
					</div>
				</Modal>

				<Modal 
					close={this.closeOne}
					isOpen={this.state.openModalOne}>

					<div className="grid grid-3">
						<div className="col-3-2">
							<div className="grid grid-1">
								<Card 
									classes="footer-plain no-border"
									footer={
										<div className="grid grid-2">
									    	<div className="col-2 col-right">
												<Button classes="plain text" onClick={this.closeOne}>Cancel</Button>	
												<Button classes="information plain margin-left" onClick={this.closeOne}>Submit</Button>	
									    	</div>
										</div>
									}>
									<h2> Header</h2>
									<p>Example of a card used as the modal body</p>
								</Card>
							</div>
						</div>
					</div>
				</Modal>

				<Modal 
					close={this.closeTwo}
					isOpen={this.state.openModalTwo}>
					<div className="grid grid-4">
						<div className="col-4-2">
							<div className="grid grid-1">
								<h2>Hello</h2>
								<p>Just some text, a button, and grid.</p>
								<div className="grid grid-2">
							    	<div className="col-2 col-right">
										<Button classes="plain text" onClick={this.closeTwo}>Close</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		  );
	}
}

export default Modals;