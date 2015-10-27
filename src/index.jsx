import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App, AppContainer } from './app';
import AppReducer from './reducer';

/**
 * Create a store from the reducer
 * @type {[type]}
 */
let store = createStore(AppReducer);
store.dispatch({type:'INITIAL_STATE'});
console.log("store.dispatch({type:'INITIAL_STATE'}): ",store.getState())
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
    <App {...store} />
  </Provider>,
  root
)