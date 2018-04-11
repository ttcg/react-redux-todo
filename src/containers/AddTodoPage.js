import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {
	Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { addTodoItem } from "../actions";
import AddTodo from '../components/todo/AddTodo';
import InlineMessage, { MessageType } from '../components/common/InlineMessage';


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
		addTodoItem: PropTypes.func.isRequired
	}

	static contextTypes = {
		router: PropTypes.object
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.addTodoSuccess)
			this.setState({ item : { id: uuidv4(), taskItem: '', doneBy: '' } });
	}

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
					<InlineMessage message="abc" messageType={MessageType.Warning} />
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
		addTodoItem: todo => dispatch(addTodoItem(todo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage)

