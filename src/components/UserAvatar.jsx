import React from 'react';

export default React.createClass({
  displaName: 'UserAvatar',
  handleLogout: function(e){
    e.preventDefault()
    this.props.toggleUser();
    this.props.toggleUserArea();
  },
  render: function() {
    let { toggleUser, toggleUserArea, secureUser, user } = this.props;
    return (
      <div className="welcome-msg">
        <a href="#logout" onClick={toggleUserArea} >X</a> Welcome {user.firstName} <a href="#logout" onClick={this.handleLogout} >logout</a>
      </div>
    )
  }
});