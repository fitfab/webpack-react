import React from 'react';

export default React.createClass({
  render: function() {
    let { secureUser, user, left } = this.props;
    let userAvatar = secureUser? 'tooltip active transit' : 'tooltip';
    return (
      <div className={userAvatar}>
        Welcome {user.firstName} 
      </div>
    )
  }
});