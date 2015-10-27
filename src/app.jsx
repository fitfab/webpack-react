import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, SIGN_OUT, BUSY } from './actionTypes';
import * as actionCreators from './actions-creators';

import { Header, HeaderContainer } from './layout/header';
import Footer from './layout/footer';

require('./scss/app.scss'); 

export const App = React.createClass({
  handleClick: function(){
    console.log('App:Click', this.props.getState())
  },
  render: function() {
    // injected by connect() call
    const { dispatch } = this.props;
    {console.log('App: ',this.props.getState())}
    return (
      <div className="app-wrapper transit">
        <Header {...this.props} />
        <div className="greets">
          <h2 onClick={() => { this.handleClick()}}>Hello </h2>
        </div>
        <Footer />
      </div>
    )
  }
});

function mapStateToProps(state){
  return {
    secureUser: state.get('secureUser'),
    loading: state.get('loading'),
    products: state.get('products'),
    user: state.get('user')
  };
}

export default connect(
  mapStateToProps,
  actionCreators
  )(App) 
