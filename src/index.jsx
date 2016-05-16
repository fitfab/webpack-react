'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import configureStore from './store/configureStore';

/**
 * 1) Containers -- top components that
 * that routes will point to it
 */
import AppWrapper from './container/AppWrapper';
import Home from './components/home/Home';
import Products from './components/products/Products';

/**
 * Set the router using the containers
 * as the entry point
 */
const routes = (<Route component={AppWrapper}>
                    <IndexRoute component={Home} />
                    <Route path="/" component={Home} />
                    <Route path="/products" component={Products} />
                </Route>);

/**
 * 2) Create a store from the reducer
 */
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

/**
 * Watch for navigation events, such as for analytics.
 * Simply listen to the enhanced history via history.listen.
 * This takes in a function that will receive a location
 * any time the store updates. This includes any time travel
 * activity performed on the store.
 * history.listen(location => console.log(location.pathname))
 */


/**
 * Warning: render(): Rendering components directly into
 * document.body is discouraged,
 * since its children are often manipulated
 * by third-party scripts and browser extensions.
 * This may lead to subtle reconciliation issues.
 * Try rendering into a container element
 * created for your app.
 */
const root = document.getElementById('root');

/**
 * Warning: React.render is deprecated.
 * Use ReactDOM.render instead
 */
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    root
);
