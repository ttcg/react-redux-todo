import React from 'react';

const About = () => {
	return (		
		<React.Fragment>			
			<p>Demo website which uses React and Redux technology.  It contains basic CRUD activities.</p>
			<p>It uses the .Net Core services hosted on GCP and the service can be viewed <a href={process.env.REACT_APP_ServiceUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
			<p>This app uses the following libraries:</p>
			<ul>
				<li>Axios</li>
				<li>React-Redux</li>
				<li>React-Router</li>
				<li>ReactStrap@Next</li>
				<li>React-Thunk</li>
			</ul>
			<p>The source code can be found on <a href="https://www.youtube.com/watch?v=yVMDiKhTBLA" target="_blank" rel="noopener noreferrer">github</a></p>		
		</React.Fragment>
	);
}

export default About;