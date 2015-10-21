import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, SIGN_OUT, BUSY } from './actionTypes';
import Header from './layout/header';
import Footer from './layout/footer';

require('./scss/app.scss'); 

export default React.createClass({
  getInitialState: function() {
    return null;
  },
  render: function(){
    // injected by connect() call at the bottom
    const { dispatch } = this.props;
    return (
      <div className="app-wrapper transit">
        <Header />
        <div className="greets">
          <h2>Hello, {this.props.name} ;-)</h2>
        </div>
        <Footer />
      </div>
    )
  }
});