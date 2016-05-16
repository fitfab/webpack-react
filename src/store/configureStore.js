import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import NetworkReducer from './../reducers/NetworkReducer';
import UIReducer from './../reducers/UIReducer';
import { routerReducer } from 'react-router-redux';

// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

// Create store with the combinedReducer
// Note: recently add the routeReducer from
// redux-simple-router
const combinedReducers = combineReducers({
    UIState: UIReducer,
    routing: routerReducer,
    Network: NetworkReducer
});

export default function configureStore() {
    const store = createStoreWidthMiddleware(combinedReducers);

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

