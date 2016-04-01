import React from 'react';

export default React.createClass({
  displaName: 'Avatar',
  handleLogout: function(e){
    e.preventDefault()
    this.props.uiActions.toggleUser();
  },
  render: function() {
    let { user } = this.props;
    return (
      <div className="welcome-msg">
        Welcome {user.firstName} <a href="#logout" onClick={this.handleLogout} >logout</a>
      </div>
    )
  }
});