import React, { PropTypes } from 'react';
require('./Spinner.scss');

export default React.createClass({
    displayName: 'Spinner',

    propTypes: {
        busy: PropTypes.bool
    },

    showSpinner() {
        return (<div className="spinner-loader">loading...</div>);
    },
    render() {
        return (
            this.props.busy ? this.showSpinner() : null
        );
    }
});
