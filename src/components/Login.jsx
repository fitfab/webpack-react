import React from 'react';

require('./Login.scss');
export default React.createClass({
  displayName: 'Login',
  getInitialState: function(){
    return {
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        username:''
    }
  },
  handleChange: function(event){
    let { name, value } = event.target
    this.setState({[name]: value});
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.props.uiActions.toggleUser();
  },
  showForm: function(){
    let firstName = this.state.firstName;
    return (
      <div>
        <h3 className="welcome-msg">Login / Register</h3>
        <form className="login-form active" onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              name="firstName"
              type="text" 
              placeholder="First Name" 
              value={this.state.firstName}
              onChange={this.handleChange} />
          </fieldset>
          <fieldset>
            <input 
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange} />
          </fieldset>
          <fieldset>
            <input 
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange} />
          </fieldset>
          <fieldset>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange} />
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
