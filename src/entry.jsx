import './components/home/home.scss';

import React from 'react';

export default React.createClass({
    displayName: 'Home',

    render() {
        return (
            <div className="home">
                <h1>Welcome to React, Redux & Webpack</h1>
            </div>
        );
    }
});
