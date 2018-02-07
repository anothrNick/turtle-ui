import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/NavHeader';

import Typography from '../app/Typography';
import Buttons from '../app/Buttons';
import Cards from '../app/Cards';
import Forms from '../app/Forms';
import Modals from '../app/Modals';
import Navs from '../app/Navs';
import Tables from '../app/Tables';
import Home from '../app/Home';

import { Route, Switch } from 'react-router-dom';


class Full extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  body: ""
		}

  	}

	componentDidMount = () => {		

	}

	render() {
		return (
			<div className={"container " + this.state.body}>
				<Header {...this.props}/>

				<div className="content">
					<Switch>
						<Route 
							path="/" 
							exact 
							component={() => <Home />}
							/>

						<Route 
							path="/typography" 
							exact 
							component={() => <Typography />}
							/>

						<Route 
							path="/buttons" 
							exact 
							component={() => <Buttons />}
							/>

						<Route 
							path="/forms" 
							exact 
							component={() => <Forms />}
							/>

						<Route 
							path="/cards" 
							exact 
							component={() => <Cards />}
							/>

						<Route 
							path="/tables" 
							exact 
							component={() => <Tables />}
							/>

						<Route 
							path="/modals" 
							exact 
							component={() => <Modals />}
							/>

						<Route 
							path="/navs" 
							exact 
							component={() => <Navs />}
							/>
					</Switch>

				</div>

				<Footer />
			</div>
		  );
	}
}

// Add this function:
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Full);