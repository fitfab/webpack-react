import React from "react";

export default React.createClass({
  render: function(){
    return (
      <div className="greets">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    )
  }
});