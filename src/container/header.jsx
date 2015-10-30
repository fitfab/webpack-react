import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';


import { SIGN_IN, SIGN_OUT, BUSY, SET_STATE, OVERLAY_OPEN, OVERLAY_CLOSE } from './../actionTypes';

export const Header = React.createClass({
  mixins: [PureRenderMixin],

  userLogin: function(e){
    e.preventDefault();
    this.props.dispatch({type: SIGN_OUT});
    console.log(this.props.getState())
  },

  render: function(){
    console.log('Header:render: ',this.props)
    return (

      <header>
        <h1 className="brand-logo">
          fitfab
        </h1>
        <nav>
          <a href="#overlay" className="selected">
            Products {this.props.getState}
          </a> 

          <a href="#login" className="align-right" onClick={this.userLogin}>
            {this.props.getState().secureUser? this.props.getState().user.name : 'login'}
          </a>
        </nav>
      </header>
    )
  }
});
