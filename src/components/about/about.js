import React from 'react';

const About = () => {
	return (		
		<React.Fragment>			
			<p>Demo website which uses React and Redux technology.  It contains basic CRUD activities.</p>
			<p>It uses the .Net Core services hosted on GCP and the service can be viewed <a href="http://35.195.110.121/" target="_blank" rel="noopener noreferrer">here</a>.</p>
			<p>This app uses the following libraries:</p>
			<ul>
				<li>Axios</li>
				<li>React-Redux</li>
				<li>React-Router</li>
				<li>ReactStrap@Next</li>
				<li>React-Thunk</li>
			</ul>		
		</React.Fragment>
	);
}

export default About;