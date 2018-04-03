import React, { Component } from 'react';
import {
	Button,
	Col,
	Container,
	Jumbotron,
	Row
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Jumbotron>
					<Container>
						<h1 className="display-3">React Redux Todo</h1>
						<p className="lead">Demo website which uses React and Redux technology.  It contains basic CRUD activities.</p>
					</Container>
				</Jumbotron>
				<Container>
					<Row>
						<Col md="4">
							<h2>View Todo List</h2>
							<p>You can view the list of todo items and filter the items such as outstanding, overdue, etc.</p>
							<p>
								<Link to="/todo"><Button color="primary">View Todo &raquo;</Button></Link>
							</p>
						</Col>
						<Col md="4">
							<h2>Add New Todo</h2>
							<p>You can add a new todo item by clicking the following button.</p>
							<p>
								<Link to="/todo/add"><Button color="primary">Add New &raquo;</Button></Link>
							</p>
						</Col>
						<Col md="4">
							<h2>About</h2>
							<p>Please click the following button to view the detail of the project.</p>
							<p>
								<Link to="/about"><Button color="primary">View Details &raquo;</Button></Link>
							</p>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		)
	}
}
