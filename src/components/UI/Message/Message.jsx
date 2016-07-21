import React, { PropTypes } from 'react';
import classNames from 'classNames';
require('./Message.scss');

export default React.createClass({
    displayName: 'Message',

    propTypes: {
        active: PropTypes.bool,
        message: PropTypes.string,
        messageType: PropTypes.string
    },

    getDefaultProps() {
        return {
            active: false,
            message: 'There was a problem! Try again later',
            messageType: 'notice'
        };
    },

    message() {
        const showMessage = (this.props.active)? 'message--active' : '';
        const classnames = classNames('message', showMessage, `message--${this.props.messageType}`);
        return (
            <div className={classnames}>
                {this.props.message}
            </div>
        );
    },

    render() {
        const view = (this.props.active) ? this.message() : null;
        return (
             view
        );
    }
});
