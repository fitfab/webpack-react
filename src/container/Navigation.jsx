import React from 'react';

import UserAvatar from './../components/UserAvatar';

export default React.createClass({
  render: function(){
    // injected by connect() call
    const { toggleUser, toggleOverlay, toggleBusy, user, secureUser } = this.props;
    console.log(this.props)
    return (
      <nav>
        <a href="#overlay" onClick={toggleOverlay}>Overlay</a>
        <a href="#products">Product</a>
          <a href="#login" className="align-right transit" onClick={toggleUser}>
            {secureUser? 'Logout' : 'Login'}
          </a>

        <UserAvatar {...this.props} />
      </nav>
    )
  }
});