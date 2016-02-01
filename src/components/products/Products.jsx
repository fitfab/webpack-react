import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { map } from 'lodash';

require('./Products.scss');
export const Products = React.createClass({
    displayName: 'Products',

    propTypes: {
        products: PropTypes.object
    },

    componentWillMount() {
        console.log('componentWillMount: Products');
    },

    componentDidMount() {
        console.log('componentDidMount: Products');
    },

    componentWillUnmount() {
        console.log('componentWillUnmount: Products');
    },

    renderItems() {

        return (
            <ul className="product-list transit">
                {map(this.props.products, function (product, key) {
                    return (
                        <li
                            className="product-list__item"
                            key={key}>
                            {product.firstName} -- email {product.email}
                        </li>
                    );

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
export default connect(null)(Products);
