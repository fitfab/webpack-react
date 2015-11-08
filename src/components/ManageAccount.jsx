import React from 'react';
import Login from './Login';
import UserAvatar from './UserAvatar';

require('./ManageAccount.scss');

export default React.createClass({
  displaName: 'UserAvatar',
  render: function() {
    let { secureUser, userArea, overlayActive } = this.props;
    let active = userArea? 'user-area active transit' : 'user-area transit';
    let accountView = secureUser? <UserAvatar {...this.props } /> : <Login {...this.props} />
    return (
      <div className={active}>
        {accountView} 
      </div>
    )
  }
});