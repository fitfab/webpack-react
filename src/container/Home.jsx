import React from 'react';

require('./home.scss');

export default React.createClass({
    displayName: 'Home',

    componentWillMount() {
        console.log('componentWillMount: Home Container');
    },

    componentDidMount() {
        console.log('componentDidMount: Home');
    },

    componentWillUnmount() {
        console.log('componentWillUnmount: Home');
    },

    render() {
        return (
            <div className="home">
                <h1>Welcome to React, Redux & Webpack</h1>
            </div>
        );
    }
});
