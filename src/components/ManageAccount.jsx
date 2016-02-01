import React from 'react';
import classNames from 'classNames'; 
import Login from './Login';
import UserAvatar from './UserAvatar';

require('./ManageAccount.scss');

export default React.createClass({
    displaName: 'UserAvatar',

    componentWillMount() {
        console.log('componentWillMount: ManageAccount');
    },

    componentDidMount() {
        console.log('componentDidMount: ManageAccount');
    },

    componentWillUnmount() {
        console.log('componentWillUnmount: ManageAccount');
    },


    render() {
        const { secureUser, userArea } = this.props;
        const AcctManClasses = classNames({
            'user-area transit': true,
            'active': userArea
        });
        const accountView = secureUser? <UserAvatar {...this.props } /> : <Login {...this.props} />
        return (
          <div className={AcctManClasses}>
            <span role="buttom" className="__user-area-close transit" onClick={this.props.uiActions.toggleUserArea}></span>
            {accountView}
          </div>
        );
    }
});
