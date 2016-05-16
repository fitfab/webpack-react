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
import Home from './components/Home/Home';
import Products from './components/products/Products';

/**
 * 2) Create a store from the reducer
 */
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

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
        <div>
        <Router history={history}>
            <Route path="/" component={AppWrapper}>
                    <IndexRoute component={Home}/>
                    <Route path="/products" component={Products} />
            </Route>
        </Router>
        </div>
    </Provider>,
    root
);
