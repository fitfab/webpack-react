import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

require('./../scss/app.scss'); 

export default React.createClass({
  displayName: 'Content',
  render: function() {
    return (
      <div className="app-wrapper transit">
        <Header />
        <Navigation {...this.props} />
        <Footer />
      </div>
    )
  }
});
