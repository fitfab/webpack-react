'use stirct';
/**
 * Root Reducer(Redux)
 */

import { 
  SET_STATE, TOGGLE_USER,
  TOGGLE_USER_AREA, TOGGLE_OVERLAY,
  TOGGLE_BUSY
} from './../actions/actionTypes';

/**
 * Initial state of the application
 * @type {Object}
 */
const initialState = {
  secureUser: false,
  userArea: false,
  busy: false,
  overlayActive: false,
  error: null
}


/**
 * Application Reducer(MVC? ohh this is controller from mvC!!)
 * @param {object} state 
 * @param {object} next state value
 */
export default function UIReducer(state, action) {
  if (typeof state === 'undefined') {
    state = initialState
  }
  switch (action.type) {
    case SET_STATE:
      return state = initialState;
    case TOGGLE_USER:
      return Object.assign({}, state, {secureUser: !state.secureUser})
    case TOGGLE_USER_AREA:
      return Object.assign({}, state, {userArea: !state.userArea})
    case TOGGLE_BUSY:
      return Object.assign({}, state, {busy:!state.busy})
    case TOGGLE_OVERLAY:
      return Object.assign({}, state, {overlayActive: !state.overlayActive})
  }
  return state;
}