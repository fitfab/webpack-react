import React from "react";

export default React.createClass({
  about: () => {
    alert('by Miguel Julio')
  },
  render: function(){
    return (
      <header>
        <h1 className="brand-logo" onClick={this.about}>
          fitfab
        </h1>
        <nav>
          <a href="#overlay" className="selected">Overlay</a> 
          <a href="#Ajax">Ajax</a>
          <a href="#login" className="align-right">Login</a>
        </nav>
      </header>
    )
  }
});