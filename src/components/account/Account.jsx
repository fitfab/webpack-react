import React from 'react';
import Login from 'components/Login/Login';
import Avatar from 'components/Avatar/Avatar';
import Drawer from 'components/Drawer/Drawer';

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
