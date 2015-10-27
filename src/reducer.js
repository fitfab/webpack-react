/**
 * Reducer(Redux)
 */

import { INITIAL_STATE, SIGN_IN, SIGN_OUT, BUSY } from './actionTypes';

/**
 * Initial state of the application
 * @type {Object}
 */
let initialState = {
  secureUser: false,
  loading: false,
  products: [],
  user: {}
}

/**
 * Application Reducer(MVC? ohh this is controller from mvC!!)
 * @param {[type]} state 
 * @param {[type]} action next value after the action`
 */
function AppReducer(state, action) {
  switch (action.type) {
    case INITIAL_STATE:
    console.log('reducer:INITIAL_STATE')
      return state = initialState;
    case SIGN_IN:
      // return the next state of the appliaction
      // this is equal to:
      // _extends({}, state, { secureUser: true });
      return {...state, secureUser: true};
    case SIGN_OUT:
      return {...state, secureUser: false};
    case BUSY:
      console.log('reducer:BUSY')
      return {...state, loading:!state.loading}
    defautl:
      return state;
  }
}

export default AppReducer;
