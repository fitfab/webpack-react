import React from 'react';
import { map } from 'lodash'

require('./Products.scss');
export default React.createClass({
    displayName: 'Products',
    renderItems: function(){
        return (
            <ul className="transit product-list">
                {map(this.props.products, function(product, key){
                    return  <li key={key}>{product.firstName} -- email {product.email}</li>
                })}
            </ul>
        )
    },
    render: function(){
        return (
            <div className="content">
                <h3>Product List:</h3>
                {this.renderItems()}
            </div>
        )
    }
})
