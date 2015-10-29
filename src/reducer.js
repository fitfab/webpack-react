/**
 * Reducer(Redux)
 */
import { Map, List } from 'immutable';
import { SIGN_IN, SIGN_OUT, BUSY, SET_STATE } from './actionTypes';

/**
 * Initial state of the application
 * @type {Object}
 */
let initialState = Map({
  secureUser: false,
  busy: false,
  overlayActive: false,
  products: List(),
  user: Map()
})

/**
 * Application Reducer(MVC? ohh this is controller from mvC!!)
 * @param {[type]} state 
 * @param {[type]} action next value after the action`
 */
function AppReducer(state = Map(), action) {
  switch (action.type) {
    case SET_STATE:
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
      return {...state, busy:!state.get('busy')}
    defautl:
      return state;
  }
}

export default AppReducer;
