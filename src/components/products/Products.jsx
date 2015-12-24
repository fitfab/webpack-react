import React, { PropTypes } from 'react';
import { map } from 'lodash';

require('./Products.scss');
export default React.createClass({
    displayName: 'Products',

    propTypes: {
        products: PropTypes.object
    },

    renderItems() {

        return (
            <ul className="product-list transit">
                {map(this.props.products, function (product, key) {
                    return <li className="product-list__item" key={key}>{product.firstName} -- email {product.email}</li>;

                })}
            </ul>
        );
    },
    render() {
        return (
            <div className="content">
                <h3>Product List:</h3>
                {this.renderItems()}
            </div>
        );
    }
});
