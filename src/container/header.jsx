import React from 'react';
import { connect } from 'react-redux';

// TODO: do i need the pure render mixin? probably not
// i am changing the state
//import PureRenderMixin from 'react-addons-pure-render-mixin';


import { toggleUser, busy, overlayopen, overlayclose } from './../action-creators';

export const Header = React.createClass({
  displayName: 'Header',
  getInitialState: function(){
    return {...this.props.getState()}
  },

  userLogin: function(e){
    e.preventDefault();
    this.props.dispatch(toggleUser(this.state));
    this.setState(this.props.getState())
  },

  render: function(){
    console.log('Header:render: ',this.state)
    return (

      <header>
        <h1 className="brand-logo">
          <span>R</span>
          <b>2</b>
          <i>W</i>
        </h1>
        
        <nav>
          <a href="#overlay" className="selected">
            Products {this.props.getState}
          </a> 
          <p className="user-area align-right transit">
            {this.props.getState().secureUser? `welcome ${this.props.getState().user.firstName}` : ''}
            <a href="#login" onClick={this.userLogin}>
              {this.props.getState().secureUser? 'Logout' : 'login'}
            </a>
          </p> 
        </nav>
      </header>
    )
  }
});
