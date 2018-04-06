import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class About extends Component {
	render() {
		return (
			<Container>
				<h4>About</h4>
				<p>Demo website which uses React and Redux technology.  It contains basic CRUD activities.</p>
				<p>It uses the .Net Core services hosted on GCP and the services can be viewed <a href="http://35.195.110.121/" target="_blank" rel="noopener noreferrer">here</a>.</p>
				<p>This app uses the following libraries:
					<ul>
						<li>Axios</li>
						<li>React-Redux</li>
						<li>React-Router</li>
						<li>ReactStrap@Next</li>
						<li>React-Thunk</li>
					</ul>
				</p>
			</Container>
		)
	}
}
