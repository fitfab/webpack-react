/**
 * Action creators
 * 
 */

import { SET_STATE, TOGGLE_USER, TOGGLE_OVERLAY, BUSY } from './actionTypes';

export function toggleUser(state) {
  return {
    type: TOGGLE_USER,
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

export function toggleOverlay(state) {
  return {
    type: OVERLAY_OPEN,
    state 
  }
}