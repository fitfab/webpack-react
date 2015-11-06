import React from 'react';

import UserAvatar from './../components/UserAvatar';

export default React.createClass({
  render: function(){
    // injected by connect() call
    const { toggleUser, toggleOverlay, toggleBusy, user, secureUser } = this.props;

    return (
      <nav>
        <a href="#overlay" className="transit" onClick={toggleOverlay}>Overlay</a>
        <a href="#products" className="transit">Product</a>
          <a href="#login" className="align-right transit" onClick={toggleUser}>
            {secureUser? 'Logout' : 'Login'}
          </a>
        <UserAvatar {...this.props} />
      </nav>
    )
  }
});