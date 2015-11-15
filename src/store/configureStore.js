import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import NetworkReducer from './../reducers/NetworkReducer';
import UIReducer from './../reducers/UIReducer';

// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
  thunk,
  createLogger()
)(createStore);

// TODO: create store with the combinedReducer
const combinedReducers = combineReducers({
  UIReducer,
  NetworkReducer
})

export default function configureStore(initialState) {
  const store = createStoreWidthMiddleware(combinedReducers, initialState);

/*  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../reducers/UIReducer', () => {
      const nextReducer = require('./../reducers/UIReducer')
      store.replaceReducer(nextReducer)
    })
  }*/
  store.dispatch({ type: 'SET_STATE' });
  return store;
}

