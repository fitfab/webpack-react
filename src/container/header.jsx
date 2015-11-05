import React from 'react';


// TODO: do i need the pure render mixin? probably not
// i am changing the state
//import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Header',
  render: function(){
    return (
      <header>
        <h1 className="brand-logo">
          <span>R</span>
          <b>2</b>
          <i>W</i>
        </h1>
      </header>
    )
  }
});
