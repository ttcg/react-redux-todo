import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Container
} from 'reactstrap';
import EditTodo from '../components/todo/EditTodo';

export class EditTodoPage extends Component {
    static propTypes = {
        //prop: PropTypes
    }

    render() {

        const { item } = this.props;

        return (
            <Container>
                <h4>Edit Todo</h4>
                <EditTodo
                item={item} />
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {    
    let item = { id: ownProps.match.params.id, taskItem: '', doneBy: '' };

	return {
		item: item
	};
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage)
