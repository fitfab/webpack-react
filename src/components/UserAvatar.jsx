import React from 'react';

export default React.createClass({
  displaName: 'UserAvatar',
  render: function() {
    let { secureUser, user, left } = this.props;
    let userAvatar = secureUser? 'tooltip active transit' : 'tooltip transit';
    return (
      <div className={userAvatar}>
        Welcome {user.firstName} 
      </div>
    )
  }
});