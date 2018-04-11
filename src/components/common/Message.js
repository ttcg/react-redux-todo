import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const propTypes = {
    message: PropTypes.string.isRequired,
    messageType: PropTypes.oneOf(['danger', 'dark', 'info', 'success', 'warning']).isRequired
};

const Message = (props) => {

    const { message, messageType } = props;

    return (
        <UncontrolledAlert color={messageType}>
            {message}
        </UncontrolledAlert>
    );
}

export const MessageType = {
    Danger: 'danger',
    Dark: 'dark',
    Info: 'info',
    Success: 'success',
    Warning: 'warning'
}

Message.propTypes = propTypes;

export default Message;