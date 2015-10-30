import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map } from 'immutable';

import { SIGN_IN, SIGN_OUT, BUSY, SET_STATE, OVERLAY_OPEN, OVERLAY_CLOSE } from './../actionTypes';

export const Header = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    {console.log('Header:render: ',this.props.getState())}
    return (
      <header>
        <h1 className="brand-logo">
          fitfab
        </h1>
        <nav>
          <a href="#overlay" className="selected">
            Products
          </a> 

          <a href="#login" className="align-right">Login</a>
        </nav>
      </header>
    )
  }
});
