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
        const { user } = this.props.user;
        console.log('avatuser',user)
        return (
          <div>
            Welcome!!!  <a href="#logout" onClick={this.handleLogout} >logout</a>

          </div>
        );
    }
});

export default Avatar;
