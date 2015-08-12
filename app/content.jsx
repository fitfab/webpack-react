import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";

require('./scss/app.scss'); 

export default React.createClass({
  render: function(){
    return (
      <div className="app-wrapper">
        <Header />
        <div className="greets">
          <h2>Hello, {this.props.name} ;-)</h2>
        </div>
        <Footer />
      </div>
    )
  }
});