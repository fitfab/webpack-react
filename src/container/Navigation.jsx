import React from 'react';

import ManageAccount from './../components/ManageAccount';

export default React.createClass({

    handleLogin(e) {
        e.preventDefault();
        this.props.uiActions.toggleUserArea();
    },
    render() {

        return (
            <nav>
                <a href="#overlay" 
                    className="transit"
                    onClick={this.props.uiActions.toggleBusy} >Busy State</a>
                <a href="#products"
                    className="transit">Product</a>
                <a href="#login"
                    className="align-right transit" onClick={this.handleLogin} >
                    My Account
                </a>
            </nav>
        )
    }
});