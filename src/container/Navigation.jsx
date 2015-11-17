import React from 'react';

import ManageAccount from './../components/ManageAccount';

export default React.createClass({
  handleLogin: function(e){
    e.preventDefault();
    this.props.uiActions.toggleUserArea();

  },
  render: function(){
    // injected by connect() call
    const { toggleUser, toggleOverlay, toggleBusy, user, secureUser } = this.props;
    return (
      <nav>
        <a href="#overlay" className="transit" onClick={this.props.uiActions.toggleBusy}>Busy State</a>
        <a href="#products" className="transit">Product</a>
          <a href="#login" className="align-right transit" onClick={this.handleLogin}>
            My Account
          </a>
      </nav>
    )
  }
});