import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import ManageAccount from './../components/ManageAccount';
import Spinner from './../components/UI/spinner/Spinner';
import Footer from './Footer';

require('./../scss/app.scss');

export default React.createClass({
    displayName: 'Content',
    /**
     * Render all elements of the app
     * this should be something like this:
     * return function(){
     *     return this.props.children
     * }
     * ref: http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
     * @return {html} this is the react view
     */
    render() {
        return (
            <div className="app-wrapper transit">
                <ManageAccount {...this.props } />
                <Header />
                <Navigation {...this.props} />
                { this.props.children }
                <Footer />
                <Spinner {...this.props} />
            </div>
        );
    }

});
