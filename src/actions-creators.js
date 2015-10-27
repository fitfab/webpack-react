/**
 * Action creators
 * 
 */

import { SIGN_IN, SIGN_OUT, BUSY } from './actionTypes';

export function signin(){
  return {
    type: SIGN_IN,
    secureUser: true
  }
}

export function signout(){
  return {
    type: SIGN_OUT,
    secureUser: false
  }
}

export function busy(){
  return {
    type: BUSY,
    loading: true
  }
}