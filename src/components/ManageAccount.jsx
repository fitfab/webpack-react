import React from 'react';
import classNames from 'classNames'; 
import Login from './Login';
import UserAvatar from './UserAvatar';

require('./ManageAccount.scss');

export default React.createClass({
  displaName: 'UserAvatar',
  componentWillMount: function(){
    console.log('componentWillMount: ManageAccount');
  },
  componentDidMount: function(){
    console.log('componentDidMount: ManageAccount');
  },
  componentWillUnmount: function(){
    console.log('componentWillUnmount: ManageAccount');
  },

  render() {
    let { secureUser, userArea } = this.props;
    let AcctManClasses = classNames({
      'user-area transit': true,
      'active': userArea
    });
    let accountView = secureUser? <UserAvatar {...this.props } /> : <Login {...this.props} />
    return (
      <div className={AcctManClasses}>
        <span role="buttom" className="__user-area-close transit" onClick={this.props.uiActions.toggleUserArea}></span>
        {accountView} 
      </div>
    )
  }
});