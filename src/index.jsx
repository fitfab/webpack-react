import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppWrapper from './container/AppWrapper';
import configureStore from './store/configureStore';

/**
 * Create a store from the reducer
 * @type {[type]}
 */
let store = configureStore();

/**
 * Warning: render(): Rendering components directly into
 * document.body is discouraged,
 * since its children are often manipulated
 * by third-party scripts and browser extensions.
 * This may lead to subtle reconciliation issues.
 * Try rendering into a container element
 * created for your app.
 */
let root = document.getElementById('root');

/**
 * Warning: React.render is deprecated.
 * Please use ReactDOM.render
 * from require('react-dom') instead.
 */
ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  root
)