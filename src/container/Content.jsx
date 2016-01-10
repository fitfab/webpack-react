import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import ManageAccount from './../components/ManageAccount';
import Products from './../components/products/Products';
import Spinner from './../components/UI/spinner/Spinner';
import Footer from './Footer';

require('./../scss/app.scss');

export default React.createClass({
    displayName: 'Content',

    render() {

        return (
            <div className="app-wrapper transit">
                <ManageAccount {...this.props } />
                <Header />
                <Navigation {...this.props} />
                <Products {...this.props} />
                <Footer />
                <Spinner {...this.props} />
            </div>
        );
  }

});
