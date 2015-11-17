import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import ManageAccount from './../components/ManageAccount';
import Spinner from './../components/UI/spinner/Spinner';
import Footer from './Footer';

require('./../scss/app.scss'); 

export default React.createClass({
  displayName: 'Content',
  render: function() {
    return (
      <div className="app-wrapper transit">
        <ManageAccount {...this.props } />
        <Header />
        <Navigation {...this.props} />
        <Footer />
        <Spinner {...this.props} />
      </div>
    )
  }
});
