import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    displayName: 'Navigation',

    handleLogin(e) {
        e.preventDefault();
        this.props.uiActions.toggleUserArea();
    },
    render() {

        return (
            <nav>
                <Link className="transit"
                    to="/">Home</Link>
                <Link className="transit"
                    to="products">Products</Link>
                <a
                    href="#account"
                    className="align-right transit"
                    onClick={this.handleLogin} >
                    My Account
                </a>
            </nav>
        );
    }
});
