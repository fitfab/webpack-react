import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';

import * as actionCreators from './../../actions/action-creators';
import * as networkActionCreators from './../../actions/NetworkActionCreators';

require('./Products.scss');
export const Products = React.createClass({
    displayName: 'Products',

    propTypes: {
        networkActions: React.PropTypes.shape({
            fetchData: PropTypes.func.isRequired
        }),
        products: PropTypes.object
    },

    componentDidMount() {
        this.props.networkActions.fetchData();
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
                <h3>Product List</h3>
                {this.renderItems()}
            </div>
        );
    }
});

/**
 * mapStateToProps -- as the name says it.
 * map the given state to props to be pased down
 * @param  {object} state
 * @return {object} props for the component
 */
function mapStateToProps(state) {
    return {
        busy: state.UIState.busy || state.Network.busy,
        error: state.Network.error,
        overlayActive: state.UIState.overlayActive,
        products: state.Network.products,
        secureUser: state.UIState.secureUser,
        userArea: state.UIState.userArea,
        user: state.UIState.user
    };
}

/**
 * The only use case for bindActionCreators is when
 * you want to pass some action creators down to a
 * component that isn’t aware of Redux,
 * and you don’t want to pass dispatch or
 * the Redux store to it.
 *
 * @param  {function} dispatch
 * @return {object}   An object mimicking the original
 * object, but with each function immediately dispatching
 * the action returned by the corresponding action creator.
 * If you passed a function as actionCreators,
 * the return value will also be a single function.
 *
 * http://rackt.org/redux/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {

    /**
     * The only use case for bindActionCreators is when
     * you want to pass some action creators down to a
     * component that isn’t aware of Redux,
     * and you don’t want to pass dispatch or
     * the Redux store to it.
     */
    return {
        uiActions: bindActionCreators(actionCreators, dispatch),
        networkActions: bindActionCreators(networkActionCreators, dispatch)
    };
}

/**
 * Connects a React component(Products) to a Redux store.
 * Returns a React component class that injects state and
 * action creators into your component.
 *
 * https://github.com/rackt/react-redux/blob/master/docs/api.md
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
