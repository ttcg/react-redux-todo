import React, { Component } from 'react';
import { connect } from "react-redux";
import {
	Container
} from 'reactstrap';
import PropTypes from 'prop-types';

import { addTodoItem } from "../actions";
import AddTodo from '../components/todo/AddTodo';
import uuidv4 from 'uuid/v4';

class AddTodoPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			item: Object.assign({}, props.item),
			errors: {}
		}
	}

	static propTypes = {
		item: PropTypes.object.isRequired,
		addTodoItem: PropTypes.func.isRequired
	}

	static contextTypes = {
		router: PropTypes.object
	}

	updateItemState = event => {
		const field = event.target.name;
		let item = this.state.item;
		item[field] = event.target.value;
		return this.setState({ item });
	}

	submitNewTodo = event => {
		event.preventDefault();		
		this.props.addTodoItem(this.state.item);
		this.context.router.history.push(`/todo`);
	}

	// submitNewTodo = event => {
	// 	event.preventDefault();
	// 	this.props.addTodoItem(this.state.item);
	// 	window.setTimeout(function () {
	// 		this.context.router.history.push(`/todo`);
	// 	}.bind(this), 2000);
	// }

	render() {

		return (
			<Container>
				<h4>Add New Todo</h4>
				<AddTodo
					item={this.state.item}
					errors={this.state.errors}
					onSave={this.submitNewTodo}
					onChange={this.updateItemState}
				/>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	let item = { id: uuidv4(), taskItem: '', doneBy: '' };

	return {
		item: item
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addTodoItem: todo => dispatch(addTodoItem(todo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage)

