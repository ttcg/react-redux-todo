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
import { loadTodoItems, removeTodoItem } from '../actions/';
import Message, { MessageType } from '../components/common/Message';

class TodoListPage extends Component {

	static propTypes = {
		tasks: PropTypes.array.isRequired
	}

	static defaultProps = {
		tasks: []
	}

	componentDidMount = (dispatch) => this.props.loadTodoItems();	

	onDelete = id => {
		if (window.confirm('Are you sure that you want to delete this record?')) {
			this.props.removeTodoItem(id).then(this.props.loadTodoItems());
		}
	}

	render() {

		const { removeTodoSuccess } = this.props;

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
				<AddNewRow />
				<ListTodo
					{...this.props}
					onDelete={this.onDelete} />
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.todo.tasks,
		removeTodoSuccess: state.todo.removeTodoSuccess
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadTodoItems: () => dispatch(loadTodoItems()),
		removeTodoItem: index => dispatch(removeTodoItem(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);