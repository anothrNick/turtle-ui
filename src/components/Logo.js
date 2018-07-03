import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {

	render() {
		
		const classes = this.props.classes;

		return (
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 750" className={classes}>
				<g className="svg-logo">
					<g className="base">
						<g className="logo-element circle">
							<circle cx="450" cy="375" r="263" fill="none" strokeWidth="66"></circle>
						</g>
					</g>
					<g className="swag">
						<g className="logo-element ribbon-straight-wrapped-alternating">
							<path d="M725.25,304.514v95.662h77.165l-41.149-55.817l40.81-55.314H698.03c1.763,5.087,3.373,10.246,4.827,15.47H725.25z"></path>
							<path d="M174.75,445.629v-95.522H97.813l40.893,55.429l-40.893,55.426h104.158c-1.747-5.043-3.347-10.155-4.79-15.332H174.75z"></path>
							<rect x="178.753" y="308.517" width="542.494" height="133.109" ></rect>
						</g>
						<g className="logo-element horizontal-line-single-solid">
							<line fill="none" strokeWidth="40" stroke="rgba(255,255,255,1)" x1="295" y1="375" x2="610" y2="375"></line>
						</g>
					</g>
				</g>
			</svg>
		  );
	}
}

export default Logo;