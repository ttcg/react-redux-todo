import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
	Button,
	Col,
	Container,
	Row
} from 'reactstrap';
import PropTypes from 'prop-types';

import ListTodo from '../components/todo/ListTodo';
import { loadTodoItems } from '../actions/';

// const mapDispatchToProps = dispatch => {
//   return {
//     removeTodoItem: index => dispatch(removeTodoItem(index))
//   };
// };

//export default connect(mapStateToProps,mapDispatchToProps) (ListTodo);


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
					{...this.props} />
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return { tasks: state.todo.tasks };
};

export default connect(mapStateToProps)(TodoListPage);