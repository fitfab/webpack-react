import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../action-creators';

import { Header, HeaderContainer } from './header';
import Footer from './footer';

require('./../scss/app.scss'); 

export const App = React.createClass({
  render: function() {
    // injected by connect() call
    const { dispatch } = this.props;
    {console.log('App:render: ',this.props.getState())}
    return (
      <div className="app-wrapper transit">
        <Header {...this.props} />
        <div className="greets">
      
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
