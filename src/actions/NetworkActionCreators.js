import Firebase from 'firebase';
//import { firebaseUlr, users, products } from './../constants/Constants'
import { 
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './NetworkActionTypes';

// To read and write data to and from a Firebase database,
// we need to first create a reference to it
const baseRef  = new Firebase('https://fitfab.firebaseio.com/');

// Reference to the user collection
const usersRef = baseRef.child('users');

// reference to the product collection
const prodsRef = baseRef.child('products');

/**
 * Creates action for when the request begin
 * @param  {object} firebase a database reference
 * @return {obejct} action indicating request begun
 */
export function requestBegin(firebase) {
  return {
    type: REQUEST_BEGIN
  }
}

/**
 * [requestSuccess description]
 * @param  {object} firebase database reference
 * @param  {object} response the database response
 * @return {obejct} action
 */
export function requestSuccess(firebase, response) {
  return {
    type: REQUEST_SUCCESS,
    data: response,
    receiveAt: Date.now()
  }
}

export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    error: error,
    receiveAt: Date.now()
  }
}

/**
 * 1st thunk creator using firebase as
 * the database
 *
 * http://rackt.org/redux/docs/advanced/AsyncActions.html
 */
export function fetchData() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestBegin('firebase connection'))
/*    usersRef.push().set({
        firstName:'Tom',
        lastName: 'Alper',
        username: 'samiam',
        password: 'p@ssword',
        email: 'thomas.alpers@gmail.com'
    });*/
    return baseRef.child('users').on('value', function(snapshot){
      console.log('firebase snapshot: ',snapshot.val());
      dispatch(requestSuccess('firebase connection', snapshot.val()))
      return snapshot.val();
    })
  }
}

export function registerUser() {
  return function(){

  }
}