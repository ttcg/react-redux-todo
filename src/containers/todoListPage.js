import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Button,
	Col,
	Container,
	Row
} from 'reactstrap';

import ListTodo from '../components/todo/ListTodo';
import { loadTodoItems, removeTodoItem, markTodoItem } from '../actions/';
import Message, { MessageType } from '../components/common/Message';

class TodoListPage extends Component {

	static propTypes = {
		tasks: PropTypes.array.isRequired,
		removeTodoSuccess: PropTypes.bool.isRequired,
		markTodoSuccess: PropTypes.bool.isRequired,
		loadTodoItems: PropTypes.func.isRequired,
		removeTodoItem: PropTypes.func.isRequired,
		markTodoItem: PropTypes.func.isRequired
	}

	componentDidMount = (dispatch) => {
		this.props.loadTodoItems();	
	}

	onDelete = id => {
		if (window.confirm('Are you sure that you want to delete this record?')) {
			this.props.removeTodoItem(id).then(this.props.loadTodoItems());
		}
	}

	onMark = (id, hasDone) => {
		this.props.markTodoItem(id, hasDone);
	}

	render() {

		const { removeTodoSuccess, markTodoSuccess } = this.props;

		const AddNewRow = () => (
			<Row className="text-right mb-2">
				<Col>
					<Link to="/todo/add"><Button color="primary">Add New Item &raquo;</Button></Link>
				</Col>
			</Row>
		);

		return (
			<Container>
				<h4>Todo List</h4>
				{
					removeTodoSuccess &&
					<Message message="The item has been removed successfully." messageType={MessageType.Success} />
				}
				{
					markTodoSuccess &&
					<Message message="The item has been marked successfully." messageType={MessageType.Success} />
				}
				<AddNewRow />
				<ListTodo
					{...this.props}
					onDelete={this.onDelete}
					onMark={this.onMark}
					/>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.todo.tasks,
		removeTodoSuccess: state.todo.removeTodoSuccess,
		markTodoSuccess: state.todo.markTodoSuccess
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadTodoItems: () => dispatch(loadTodoItems()),
		removeTodoItem: index => dispatch(removeTodoItem(index)),
		markTodoItem: (id, data) => dispatch(markTodoItem(id, data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);