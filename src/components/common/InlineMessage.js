import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class InlineMessage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            visible: true
        };           
    }

    static propTypes = {
        message: PropTypes.string.isRequired,
        messageType: PropTypes.oneOf(['danger', 'dark', 'info', 'success', 'warning']).isRequired
    
    };
    
    onDismiss() {
        this.setState({ visible: false });
    }

    render() {

        const { message, messageType } = this.props; 

        return (
            <Alert color={messageType}>
                {message}
            </Alert>
        );
    }
}

export const MessageType = {    
    Danger: 'danger',
    Dark: 'dark',
    Info: 'info',
    Success : 'success',
    Warning : 'warning',
}

export default InlineMessage;