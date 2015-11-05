import React from 'react';

export default React.createClass({
  render: function(){
    // injected by connect() call
    const { toggleUser, toggleOverlay, toggleBusy, user, secureUser } = this.props;
    console.log(this.props)
    return (
      <nav>
        <a href="#overlay" onClick={toggleOverlay}>Overlay</a>
        <a href="#products">Product</a>
        <b className="user-area aling-right">
          {secureUser? `Welcome ${user.firstName} ` : ''}
          <a href="#login" onClick={toggleUser}>
            {secureUser? 'Logout' : 'Login'}
          </a>
        </b>
        <div className="tooltip">
         food this again
        </div>
      </nav>
    )
  }
});