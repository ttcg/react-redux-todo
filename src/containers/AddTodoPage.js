import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {
	Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { addTodoItem, addTodoUnmount, saveNewTodoItem } from "../actions";
import AddTodo from '../components/todo/AddTodo';
import Message, { MessageType } from '../components/common/Message';


class AddTodoPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			item: Object.assign({}, props.item),
			isEditing: false,
			isSaving: false,
			errors: {}
		}
	}

	static propTypes = {
		item: PropTypes.object.isRequired,
		addTodoSuccess: PropTypes.bool.isRequired,
		redirectToListPage: PropTypes.bool.isRequired,
		addTodoItem: PropTypes.func.isRequired,
		addTodoUnmount: PropTypes.func.isRequired,
		saveNewTodoItem: PropTypes.func.isRequired
	}

	static contextTypes = {
		router: PropTypes.object
	}

	// static getDerivedStateFromProps(nextProps, prevState) {	
	// 	if (nextProps.addTodoSuccess && !prevState.isEditing) {			
	// 			return {
	// 				item: { id: uuidv4(), taskItem: '', doneBy: '' }
	// 			};
	// 		}

	// 	return null;
	// }

	componentWillUnmount = () => this.props.addTodoUnmount();

	updateItemState = event => {
		const field = event.target.name;
		let item = this.state.item;
		item[field] = event.target.value;
		return this.setState({ item, isEditing : true });
	}

	saveTodo = (event, btn) => {
		event.preventDefault();
		if (btn === 'Save')
			this.props.addTodoItem(this.state.item);
		else {
			this.setState({ isSaving: true, isEditing : false });
			this.props.saveNewTodoItem(this.state.item).then(() => {				
				this.setState({ isSaving: false });
				if (this.props.addTodoSuccess)
					this.setState({ item: { id: uuidv4(), taskItem: '', doneBy: '' } });
			});
		}
	}

	render() {

		const { addTodoSuccess, redirectToListPage } = this.props;
		const { isSaving, item } = this.state;

		return (
			redirectToListPage
				? (<Redirect to={"/todo"} />)
				:
				<Container>
					<h4>Add New Todo</h4>
					{
						addTodoSuccess &&
						<Message message="The item has been added successfully." messageType={MessageType.Success} />
					}
					<AddTodo
						item={item}
						errors={this.state.errors}
						onSave={this.saveTodo}
						onChange={this.updateItemState}
						isSaving={isSaving}
					/>
				</Container>
		)
	}
}

const mapStateToProps = (state) => {
	let item = { id: uuidv4(), taskItem: '', doneBy: '' };

	return {
		item: item,
		addTodoSuccess: state.todo.addTodoSuccess,
		redirectToListPage: state.todo.redirectToListPage
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addTodoItem: todo => dispatch(addTodoItem(todo)),
		addTodoUnmount: () => dispatch(addTodoUnmount()),
		saveNewTodoItem: todo => dispatch(saveNewTodoItem(todo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage)