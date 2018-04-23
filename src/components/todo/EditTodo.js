import React from 'react';
import {
	Button,
	Col,
	Form,
	FormGroup,
	Input,
	Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactNbsp from 'react-nbsp';

const propTypes = {
	item: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
}

const EditTodo = (props) => {

	const { item, onChange, onSave } = props;

	return (

		<Form onSubmit={e => onSave(e, 'Save')}>
			<FormGroup row>
				<Label for="id" sm={2}>Id</Label>
				<Col sm={10}>
					<strong>{item.id}</strong>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="taskItem" sm={2}>Todo Task</Label>
				<Col sm={10}>
					<Input type="text" name="taskItem" value={item.taskItem} onChange={onChange} />
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="doneBy" sm={2}>Done By</Label>
				<Col sm={10}>
					<Input type="date" name="doneBy" value={item.doneBy} onChange={onChange} />
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={{ size: 10, offset: 2 }}>
					<Button color="primary" onClick={e => onSave(e, 'Save')} value='Save'>Save</Button>
					<ReactNbsp count="3" />
					<Button color="primary" onClick={e => onSave(e, 'SaveAndNew')} value='SaveAndNew'>Save and New</Button>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={{ size: 10, offset: 2 }}>
					<Link to="/todo">Back to List</Link>
				</Col>
			</FormGroup>
		</Form>

	);
}

EditTodo.propTypes = propTypes;

export default EditTodo;