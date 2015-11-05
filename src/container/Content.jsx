import React from 'react';


require('./../scss/app.scss'); 

export default React.createClass({
  displayName: 'Content',
  render: function() {
    // injected by connect() call
    const { dispatch, toggleUser, toggleOverlay, busy } = this.props;
    return (
      <div className="app-wrapper transit">
        <button>Overlay</button>
        <button>Login</button>
        <button>Loading</button>
      </div>
    )
  }
});
