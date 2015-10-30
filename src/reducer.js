/**
 * Reducer(Redux)
 */
import { Map, List } from 'immutable';
import { SIGN_IN, SIGN_OUT, BUSY, SET_STATE, OVERLAY_OPEN, OVERLAY_CLOSE } from './actionTypes';

/**
 * Initial state of the application
 * @type {Object}
 */
const initialState = {
  secureUser: true,
  busy: false,
  overlayActive: false,
  products: [10,12,23,78,96],
  user: {name:'Miguel',username: 'fitfab', location: 'NYC'}
}


/**
 * Application Reducer(MVC? ohh this is controller from mvC!!)
 * @param {[type]} state 
 * @param {[type]} action next value after the action`
 */
function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
    console.log('reducer:SET_STATE', initialState)
      return state = initialState;
    case SIGN_IN:
      // return the next state of the appliaction
      // this is equal to:
      // _extends({}, state, { secureUser: true });
      return {...state, secureUser: true};
    case SIGN_OUT:
      return {...state, secureUser: false, user: {name: 'login'}};
    case BUSY:
      console.log('reducer:BUSY', state.busy)
      return {...state, busy:!state.busy};
    case OVERLAY_OPEN:
      return {...state, overlayActive: true};
    case OVERLAY_CLOSE:
      return {...state, overlayActive: false}
    defautl:
      return state;
  }
}

export default AppReducer;
