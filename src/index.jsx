import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import { createHistory } from 'history';
import configureStore from './store/configureStore';

/**
 * 1) Containers -- top components that
 * that routes will point to it
 */
import AppWrapper from './container/AppWrapper';
import Home from './container/Home';
import Products from './components/products/Products';

/**
 * 2) Set the router using the containers
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
 * 3) Create a store from the reducer
 */
const store = configureStore();

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
