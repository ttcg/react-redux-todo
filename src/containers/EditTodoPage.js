import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Container
} from 'reactstrap';
import EditTodo from '../components/todo/EditTodo';
import { getTodoItem, updateTodoItem } from '../actions/';
import Message, { MessageType } from '../components/common/Message';

export class EditTodoPage extends Component {
    static propTypes = {
        getTodoItem: PropTypes.func.isRequired,
        updateTodoItem: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        let item = { id: '', taskItem: '', doneBy: '', hasDone: false };
        this.state = {
            item: item,
            isSaving: false            
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {	
        if (nextProps.item)
            return { item: nextProps.item };
    }

    componentDidMount() {
        if (this.props.id) {
            this.props.getTodoItem(this.props.id);
        }
    }

    updateItemState = event => {
        const field = event.target.name;
        let item = this.state.item;

        item[field] = event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value;

        this.setState({ item });
    }

    saveTodo = (event) => {
        event.preventDefault();

        this.setState({ isSaving : true });
        this.props.updateTodoItem(this.state.item.id, this.state.item).then(() => {
            this.setState({ isSaving : false });
        });
    }

    render() {

        const { item, isSaving } = this.state;

        const { updateTodoSuccess } = this.props;

        return (
            <Container>
                <h4>Edit Todo</h4>
                {
                    updateTodoSuccess &&
                    <Message message="The item has been updated successfully." messageType={MessageType.Success} />
                }
                <EditTodo
                    item={item}
                    onChange={this.updateItemState}
                    onSave={this.saveTodo}
                    isSaving={isSaving} />
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        id: ownProps.match.params.id,
        item: state.todo.task,
        updateTodoSuccess: state.todo.updateTodoSuccess
    };
}

const mapDispatchToProps = dispatch => {

    return {
        getTodoItem: id => dispatch(getTodoItem(id)),
        updateTodoItem: (id, item) => dispatch(updateTodoItem(id, item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage)
