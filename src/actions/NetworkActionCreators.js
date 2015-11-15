import Firebase from 'firebase';
import { firebaseUlr, users, products } from './../constants/constants'
import { 
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './NetworkActionTypes';

const baseRef  = new Firebase(firebaseUlr);
const usersRef = baseRef.child(users);
const prodsRef = baseRef.child(products);

/**
 * Creates action for when the request begin
 * @param  {object} firebase a database reference
 * @return {obejct}          action indicating request begun
 */
export function requestBegin(firebase) {
  return {
    type: REQUEST_BEGIN,
    firebase
  }
}

/**
 * [requestSuccess description]
 * @param  {object} firebase database reference
 * @param  {object} response the database response
 * @return {obejct}          action
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
