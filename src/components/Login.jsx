import React from 'react';

require('./Login.scss');
export default React.createClass({
  displayName: 'Login',
  handleSubmit: function(e){
    e.preventDefault();
    this.props.toggleUser();
  },
  showForm: function(){
    return (
      <div>
        <h3 className="welcome-msg">Login / Register</h3>
        <form className="login-form active" onSubmit={this.handleSubmit}>
          <fieldset>
            <input name="email" type="text" placeholder="First Name" />
          </fieldset>
          <fieldset>
            <input name="password" type="password" placeholder="password" />
          </fieldset>
          <fieldset>
            <button type="submit" className="transit">Go</button>
          </fieldset>
        </form>
      </div>
    )
  },
  render: function(){
    let { overlayActive, secureUser, user, toggleUser } = this.props;

    return (
      secureUser && overlayActive? null : this.showForm()
    )
  }
})