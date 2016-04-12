import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Account from './../components/Account/Account';
import Spinner from './../components/UI/Spinner/Spinner';
import Message from './../components/UI/Message/Message';
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
        console.log(this.props);
        const toggleMessage = (this.props.error)? true : false;
        const message = (this.props.error)? this.props.error.message : '';
        return (
            <div className="app-wrapper transit">
                <Header />
                <Navigation {...this.props} />
                <Account {...this.props } />
                {/* This is used by the router to include content */}
                { this.props.children }
                <Footer />
                <Spinner {...this.props} />
                <Message
                    message={message}
                    active={toggleMessage}
                    messageType='error' />
            </div>
        );
    }

});
