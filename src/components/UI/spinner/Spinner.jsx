import React from 'react';
require('./Spinner.scss');

export default React.createClass({

  showSpinner: function(){
    return (<div className="spinner-loader">loading...</div>)
  },
  render: function(){
    console.log('Spinner/props: ', this.props)
    return (
      this.props.busy? this.showSpinner() : null
    )
  }
})