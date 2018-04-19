import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container } from 'reactstrap';

import About from '../components/about/about';
import { resetTodoItem, resetTodo } from '../actions';
import Message, { MessageType } from '../components/common/Message';

export class AboutPage extends Component {
    static propTypes = {
        resetTodoSuccess: PropTypes.bool.isRequired,
        resetTodoItem: PropTypes.func.isRequired,
        resetTodo: PropTypes.func.isRequired
    }

    componentWillUnmount = () => {
        this.props.resetTodo();
    }
    

    onReset = () => this.props.resetTodoItem();

    render() {

        const { resetTodoSuccess } = this.props;

        return (
            <Container>
                <h4>About</h4>
                <About />
                <br /><br />
                {
					resetTodoSuccess &&
					<Message message="The items are reset successfully." messageType={MessageType.Success} />
				}
                <Button color="success" onClick={this.onReset}>Reset Todo Items</Button>
                <p className="text-danger">Click here to reset the items of todo.  Please be careful that you will lose any changes to the existing items.</p>                
            </Container>
        )
    }
}

const mapStateToProps = (state) => (
    {   
		resetTodoSuccess: state.todo.resetTodoSuccess
    }
)

const mapDispatchToProps = dispatch => {
	return {
        resetTodoItem: () => dispatch(resetTodoItem()),
        resetTodo: () => dispatch(resetTodo())
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)

