import React, { Component } from 'react';
import { 
	Col,
	Container,
	Jumbotron,
	Row 
	 	} from 'reactstrap';

export default class Home extends Component {
  	render() {
		return (
		<React.Fragment>
			<Jumbotron>
				<Container>
					<h1 className="display-3">Home Page</h1>
					<p className="lead">This is a Home Page</p>
				</Container>
			</Jumbotron>
			<Container>
				<Row>
					<Col md="4">
						<h2>View Todo List</h2>
						<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            			<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
					</Col>
					<Col md="4">
						<h2>Add New Todo</h2>
						<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            			<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
					</Col>
					<Col md="4">
						<h2>About</h2>
						<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            			<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
		)
  	}
}
