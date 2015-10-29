/**
 * Action creators
 * 
 */

import { SIGN_IN, SIGN_OUT, BUSY, SET_STATE } from './actionTypes';

export function signin(state){
  return {
    type: SIGN_IN,
    state
  }
}

export function signout(state){
  return {
    type: SIGN_OUT,
    state
  }
}

export function busy(state){
  return {
    type: BUSY,
    state
  }
}