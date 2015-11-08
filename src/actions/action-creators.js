/**
 * Action creators
 * 
 */

import { SET_STATE, TOGGLE_USER, TOGGLE_USER_AREA, TOGGLE_OVERLAY, TOGGLE_BUSY } from './actionTypes';

export function toggleUser() {
  return {
    type: TOGGLE_USER
  }
}

export function toggleUserArea() {
  return {
    type: TOGGLE_USER_AREA
  }
}

export function toggleBusy(){
  return {
    type: TOGGLE_BUSY,
  }
}

export function setstate(){
  return {
    type: SET_STATE
  }
}

export function toggleOverlay() {
  return {
    type: TOGGLE_OVERLAY
  }
}