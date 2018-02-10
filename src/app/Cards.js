import React, { Component } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';

class Cards extends Component {

	render() {
		return (
			<div >
				<h1>Cards</h1>
				<div className="grid grid-2">
					<Card 
						classes="footer-plain"
						footer={
							<div className="grid grid-2">
							    	<div className="col-2 col-right">
									<Button type="plain text">Cancel</Button>	
									<Button type="information plain" classes="margin-left">Submit</Button>	
						    	</div>
							</div>
						}>
						<h2>Card Header</h2>
						<p>Example of a card with a header</p>
					</Card>

					<Card 
						classes="no-content-padding footer-plain"
						footer={
							<div className="grid grid-2">
							    	<div className="col-2 col-right">
									<Button type="plain text">Cancel</Button>	
									<Button type="information plain" classes="margin-left">Submit</Button>	
						    	</div>
							</div>
						}>
						<h2 className="padding">Card Header</h2>
						<p>Example of a card with a header and no content padding</p>
					</Card>


					<Card 
						footer={
							<div className="grid grid-2">
						    	<div className="col-2 col-right">
									<Button type="text">Cancel</Button>	
									<Button type="information" classes="margin-left">Submit</Button>	
						    	</div>
							</div>
						}
						>
						<h2>Card Header</h2>
						<p>Example of a card with a header and footer</p>
					</Card>

					<Card 
						state="information"
						classes="footer-plain"
						footer={
							<div className="grid grid-2">
							    	<div className="col-2 col-right">
									<Button type="plain text">Cancel</Button>	
									<Button type="information plain" classes="margin-left">Submit</Button>	
						    	</div>
							</div>
						}>
						<h2>Card Header</h2>
						<p>Example of a card with a header</p>
					</Card>

					<div className="col-2 margin-top-more">
						<div className="grid grid-2">
							<Card 
								classes="footer-plain"
								footer={
									<div className="grid grid-2">
									    	<div className="col-2 col-right">
											<Button type="plain text">Cancel</Button>	
											<Button type="success plain" classes="margin-left">Login</Button>	
								    	</div>
									</div>
								}>
								<h2>Login</h2>
								<div className="grid grid-1">
							    	<Input placeholder="enter username..." label="Username"/>
							    	<Input placeholder="enter password..." label="Password" type="password"/>
								</div>
							</Card>
						</div>
					</div>

					<div className="col-2 margin-top-more">
						<div className="grid grid-4">

							<Card footer={"footer"}>Plain with footer</Card>
							<Card footer={"footer"} classes="success">Success with footer</Card>
							<Card footer={"footer"} classes="information">Information with footer</Card>
							<Card footer={"footer"} classes="danger">Danger with footer</Card>


							<Card>Plain</Card>
							<Card classes="success">Success</Card>
							<Card classes="information">Information</Card>
							<Card classes="danger">Danger</Card>

							<Card state="alert">Plain Background</Card>
							<Card classes="success" state="alert">Success Background</Card>
							<Card classes="information" state="alert">Information Background</Card>
							<Card classes="danger" state="alert">Danger Background</Card>

						</div>
					</div>
				</div>
			</div>
		  );
	}
}

export default Cards;