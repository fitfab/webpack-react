import React, { PropTypes } from 'react';
import classNames from 'classNames'; 
import Drawer from './../../Drawer/Drawer';
require('./Message.scss');

export default React.createClass({
    displayName: 'Message',

    propTypes: {
        msgType: PropTypes.string
    },

    getDefaultProps() {
        return {
            msgType: 'notice'
        };
    },

    render() {
        const classnames = classNames({this.props.msgType})
        return (
            <div>
            </div>
        );
    }
});
