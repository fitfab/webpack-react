/**
 * Action creators
 * 
 */

import { SIGN_IN, SIGN_OUT, BUSY, SET_STATE, OVERLAY_OPEN, OVERLAY_CLOSE } from './actionTypes';

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

export function setstate(state){
  return {
    type: SET_STATE,
    state
  }
}

export function overlayopen(state) {
  return {
    type: OVERLAY_OPEN,
    state 
  }
}

export function overlayclose(state) {
  return {
    type: OVERLAY_CLOSE,
    state 
  }
}