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
import { loadTodoItems } from '../actions/';

class TodoListPage extends Component {

	static propTypes = {
		tasks: PropTypes.array.isRequired
	}

	static defaultProps = {
		tasks: []
	}

	componentDidMount = () => {
		this.props.dispatch(loadTodoItems());
	}

	onDelete = id => {
		if (window.confirm('Are you sure that you want to delete this record?')) {
			console.log(id);
		}
	}

	render() {

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
				<AddNewRow />
				<ListTodo
					{...this.props}
					onDelete={this.onDelete} />
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return { tasks: state.todo.tasks };
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		removeTodoItem: index => dispatch(removeTodoItem(index))
// 	};
// };

export default connect(mapStateToProps)(TodoListPage);