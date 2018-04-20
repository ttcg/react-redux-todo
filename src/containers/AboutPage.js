import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container } from 'reactstrap';

import About from '../components/about/about';
import { resetTodoItem, resetTodoUnmount } from '../actions';
import Message, { MessageType } from '../components/common/Message';

export class AboutPage extends Component {
    static propTypes = {
        resetTodoSuccess: PropTypes.bool.isRequired,
        resetTodoItem: PropTypes.func.isRequired,
        resetTodoUnmount: PropTypes.func.isRequired
    }

    componentWillUnmount = () => this.props.resetTodoUnmount();

    onReset = () => this.props.resetTodoItem();

    render() {

        const { resetTodoSuccess } = this.props;

        const ResetSection = () => {
            return (
                <div>
                    {
                        resetTodoSuccess &&
                        <Message message="The items are reset successfully." messageType={MessageType.Success} />
                    }
                    < Button color="success" onClick={this.onReset} > Reset Todo Items</Button >
                    <p className="text-danger">Click here to reset the items of todo.  Please be careful that you will lose any changes made to the existing items.</p>
                </div>
            );
        };

        return (
            <Container>
                <h4>About</h4>
                <About />
                <br /> <br />
                <ResetSection />
            </Container >
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
        resetTodoUnmount: () => dispatch(resetTodoUnmount())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)

