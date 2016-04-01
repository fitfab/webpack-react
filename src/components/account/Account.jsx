import React from 'react';
import classNames from 'classNames'; 
import Login from './../Login/Login';
import Avatar from './../Avatar/Avatar';

require('./Account.scss');

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
