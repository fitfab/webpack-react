import React from 'react';
import Login from './../Login/Login';
import Avatar from './../Avatar/Avatar';
import Drawer from './../Drawer/Drawer';

export default React.createClass({
    displayName: 'Acount',

    render() {
        const { secureUser, userArea } = this.props;
        const accountView = secureUser? <Avatar {...this.props } /> : <Login {...this.props} />
        return (
            <Drawer
                customClass="drawer__close transit"
                isOpen={this.props.userArea}
                onRequestClose={this.props.uiActions.toggleUserArea}
                size={"320"}
                position={"right"}>
                {accountView}
            </Drawer>
        );
    }
});
