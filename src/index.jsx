import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { createHistory } from 'history';

/**
 * 1) Containers -- top components that
 * that routes will point to it
 */
import AppWrapper from './container/AppWrapper';
import Home from './container/Home';
import Products from './components/products/Products';

/**
 * 2) Create a store from the reducer
 */
import configureStore from './store/configureStore';
const store = configureStore();

/**
 * 3) Set the router using the containers
 * as the entry point
 */
const routes = (<Route component={AppWrapper}>
                    <Route path="/" component={Home} />
                    <Route path="/products" component={Products} />
                </Route>);

const history = createHistory();
/* redux simple router */
syncHistory(history);

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
 * Please use ReactDOM.render
 * from require('react-dom') instead.
 */
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    root
);
