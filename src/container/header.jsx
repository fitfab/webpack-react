import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export const Header = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    // injected by connect() call at the bottom
    {console.log('header: ', this.props)}
    return (
      <header>
        <h1 className="brand-logo">
          fitfab
        </h1>
        <nav>
          <a href="#overlay" className="selected">
            Overlay {this.props.loading? 'close': 'open'}
          </a> 
          <a href="#Ajax">Ajax</a>
          <a href="#login" className="align-right">Login</a>
        </nav>
      </header>
    )
  }
});
