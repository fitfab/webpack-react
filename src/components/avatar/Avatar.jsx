import React from 'react';

const Avatar = React.createClass({
    displayName: 'Avatar',
    propTypes: {
        uiActions: React.PropTypes.shape({
            toggleUser: React.PropTypes.func
        }),
        user: React.PropTypes.object
    },
    handleLogout(e) {
        e.preventDefault();
        this.props.uiActions.toggleUser();
    },

    render() {

        return (
          <div>
            Welcome!!! {this.props.user.password.email}  <a href="#logout" onClick={this.handleLogout} >logout</a>
            <img src={this.props.user.password.profileImageURL} />
          </div>
        );
    }
});

export default Avatar;
