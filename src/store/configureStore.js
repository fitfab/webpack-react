import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../RootReducer';

// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWidthMiddleware(RootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../RootReducer', () => {
      const nextReducer = require('../RootReducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}

