import React, { Component } from 'react';
import {
	Button,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddNewTodo extends Component {
	render() {
		return (
			<Container>
				<h4>Add New Todo</h4>
				<Form>
					<FormGroup row>
						<Label for="exampleEmail" sm={2}>Todo Task</Label>
						<Col sm={10}>
							<Input type="text" name="task" />
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="examplePassword" sm={2}>Done By</Label>
						<Col sm={10}>
							<Input type="date" name="doneBy" />
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="hasDone" className="col-sm-2">Has Done</Label>
						<Col sm={10}>
							<FormGroup check>
								<Input type="checkbox" name="hasDone" id="hasDone" />{' '}
								<Label check for="hasDone">
									Yes
              					</Label>
							</FormGroup>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col sm={{ size: 10, offset: 2 }}>
							<Button color="primary">Submit</Button>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col sm={{ size: 10, offset: 2 }}>
							<Link to="/todo">Back to List</Link>
						</Col>
					</FormGroup>
				</Form>
			</Container>
		)
	}
}
