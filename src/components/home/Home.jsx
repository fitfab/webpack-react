import './home.scss';

import React from 'react';
import DatePicker from 'material-ui/DatePicker';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
    displayName: 'Home',

    handleToggle() {
        this.setState({open: !this.state.open});
    },

    handleClose() {
        this.setState({open: !this.state.open});
    },

    getInitialState: function() {
        return {open: false};
      },

    render() {
        return (
            <div className="home">
                <h1>Welcome to React, Redux, Firebase, Express & Webpack</h1>
                <p>Inspired by <a href="http://www.christianalfoni.com">Christian Alfoni</a></p>
                <DatePicker mode="landscape" />

                <RaisedButton
                  label="Toggle Drawer"
                  onTouchTap={this.handleToggle}
                />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}>
                <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
});
