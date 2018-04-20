import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {
	Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { addTodoItem, addTodoUnmount } from "../actions";
import AddTodo from '../components/todo/AddTodo';
import Message, { MessageType } from '../components/common/Message';


class AddTodoPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			item: Object.assign({}, props.item),
			buttonClicked: '',			
			errors: {}
		}
	}

	static propTypes = {
		item: PropTypes.object.isRequired,
		addTodoSuccess: PropTypes.bool.isRequired,
		addTodoItem: PropTypes.func.isRequired,
		addTodoUnmount: PropTypes.func.isRequired
	}

	static contextTypes = {
		router: PropTypes.object
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.addTodoSuccess)
			this.setState({ item : { id: uuidv4(), taskItem: '', doneBy: '' } });
	}

	componentWillUnmount = () => this.props.addTodoUnmount();

	updateItemState = event => {
		const field = event.target.name;
		let item = this.state.item;
		item[field] = event.target.value;
		return this.setState({ item });
	}

	saveTodo = (event, btn) => {
		event.preventDefault();		
		this.setState({ buttonClicked: btn });
		this.props.addTodoItem(this.state.item);
	}

	render() {

		const { buttonClicked } = this.state;
		const { addTodoSuccess } = this.props;

		return (
			(addTodoSuccess && buttonClicked === 'Save')
				? (<Redirect to={"/todo"} />)
				:
				<Container>
					<h4>Add New Todo</h4>
					{
						addTodoSuccess &&
						<Message message="The item has been added successfully." messageType={MessageType.Success} />
					}
					<AddTodo
						item={this.state.item}
						errors={this.state.errors}
						onSave={this.saveTodo}
						onChange={this.updateItemState}
					/>
				</Container>
		)
	}
}

const mapStateToProps = (state) => {
	let item = { id: uuidv4(), taskItem: '', doneBy: '' };

	return {
		item: item,
		addTodoSuccess: state.todo.addTodoSuccess
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addTodoItem: todo => dispatch(addTodoItem(todo)),
		addTodoUnmount: () => dispatch(addTodoUnmount())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage)

