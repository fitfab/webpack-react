import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, SIGN_OUT, BUSY } from './actionTypes';
import * as actionCreators from './actions-creators';

import { Header, HeaderContainer } from './container/header';
import Footer from './container/footer';

require('./scss/app.scss'); 

export const App = React.createClass({
  render: function() {
    // injected by connect() call
    const { dispatch } = this.props;
    {console.log('App: ',this.props.dispatch({type:BUSY}))}
    {console.log(this.props.getState())}
    return (
      <div className="app-wrapper transit">
        {console.log(this.props.getState())}
        <Header {...this.props} />
        <div className="greets">
          <h2>Hello </h2>
        </div>
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
