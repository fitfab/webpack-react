import React from 'react';

import { Header, HeaderContainer } from './header';
import Footer from './footer';

require('./../scss/app.scss'); 

export const Content = React.createClass({
  displaName: 'Content',
  propTYpes: {
  },
  render: function() {
    // injected by connect() call
    const { dispatch } = this.props;
    return (
      <div className="app-wrapper transit">
        <Header />
        <Footer />
      </div>
    )
  }
});
