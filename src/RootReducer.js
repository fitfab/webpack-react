/**
 * Reducer(Redux)
 */
import { SET_STATE, TOGGLE_USER, TOGGLE_OVERLAY, BUSY } from './actionTypes';

/**
 * Initial state of the application
 * @type {Object}
 */
const initialState = {
  secureUser: false,
  busy: false,
  overlayActive: false,
  products: [
    {name: 'Never Say Goodbye', price:'100', year: '1980'},
    {name: 'Hello', price:'11', year: '2015'},
    {name: 'we dont need another hero', price:'25', year: '1984'},
    {name: 'Besame', price:'5', year: '1960'},
    {name: 'Azucar', price:'13', year: '1988'},
  ],
  user: {firstName:'Miguel', lastName: 'julio', username: 'fitfab', location: 'NYC'}
}


/**
 * Application Reducer(MVC? ohh this is controller from mvC!!)
 * @param {[type]} state 
 * @param {[type]} action next value after the action`
 */
export default function RooReducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case SET_STATE:
      return state = initialState;
    case TOGGLE_USER:
    console.log(action)
      // return the next state of the appliaction
      // this is equal to:
      // _extends({}, state, { secureUser: true });
      return {...state, secureUser: !state.secureUser}
    case BUSY:
      return {...state, busy:!state.busy};
    case TOGGLE_OVERLAY:

      return {...state, overlayActive: !state.overlayActive};
    defautl:
      return state;
  }
}