/**
 * Action creators
 * 
 */

import { SET_STATE, TOGGLE_USER, TOGGLE_OVERLAY, TOGGLE_BUSY } from './actionTypes';

export function toggleUser(state) {
  return {
    type: TOGGLE_USER,
    state
  }
}

export function toggleBusy(state){
  return {
    type: TOGGLE_BUSY,
    state
  }
}

export function setstate(state){
  return {
    type: SET_STATE,
    state
  }
}

export function toggleOverlay(state) {
  return {
    type: TOGGLE_OVERLAY,
    state 
  }
}