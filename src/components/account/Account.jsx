'use strict';
import './Account.scss';

import React from 'react';
import classNames from 'classNames'; 
import Login from './../login/Login';
import Avatar from './../avatar/Avatar';

export default React.createClass({
    displaName: 'Acount',

    render() {
        const { secureUser, userArea } = this.props;
        const AcctManClasses = classNames({
            'user-area transit': true,
            'active': userArea
        });
        const accountView = secureUser? <Avatar {...this.props } /> : <Login {...this.props} />
        return (
          <div className={AcctManClasses}>
            <span role="buttom" className="__user-area-close transit" onClick={this.props.uiActions.toggleUserArea}></span>
            {accountView}
          </div>
        );
    }
});
