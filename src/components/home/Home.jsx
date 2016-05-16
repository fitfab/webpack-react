import './home.scss';

import React from 'react';

export default React.createClass({
    displayName: 'Home',

    render() {
        return (
            <div className="home">
                <h1>Welcome to React, Redux, Firebase, Express & Webpack</h1>
                <p>Inspired by <a href="http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup">Christian Alfoni</a></p>
            </div>
        );
    }
});
