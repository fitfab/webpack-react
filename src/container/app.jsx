import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, SIGN_OUT, BUSY } from './../actionTypes';
import * as actionCreators from './../action-creators';

import { Header, HeaderContainer } from './header';
import Footer from './footer';

require('./../scss/app.scss'); 

export const App = React.createClass({
  render: function() {
    // injected by connect() call
    const { dispatch } = this.props;

    return (
      <div className="app-wrapper transit">
        <Header {...this.props} />
        <Footer />
      </div>
    )
  }
});

function mapStateToProps(state){
  return {
    secureUser: state.get('secureUser'),
    busy: state.get('busy'),
    products: state.get('products'),
    user: state.get('user')
  };
}

export default connect(
  mapStateToProps,
  actionCreators
  )(App) 
