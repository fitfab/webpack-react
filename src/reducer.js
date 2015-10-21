/**
 * Reducer(Redux)
 */

import { SIGN_IN, SIGN_OUT, BUSY } from './actionTypes';

/**
 * Initial state of the application
 * @type {Object}
 */
let initialState = {
  secureUser: false,
  loading: false
}

/**
 * Application Reducer(MVC? ohh this is controller from mvC!!)
 * @param {[type]} state  initial value
 * @param {[type]} action next value after the action`
 */
function AppReducer(state= initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      // return the next state of the appliaction
      // this is equal to:
      // _extends({}, state, { secureUser: true });
      return {...state, secureUser: true};
    case SIGN_OUT:
      return {...state, secureUser: false};
    case BUSY:
      return {...state, loading:!state.loading}
    defautl:
      return state;
  }
}

export default AppReducer;
