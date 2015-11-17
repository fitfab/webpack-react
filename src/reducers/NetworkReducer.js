'use stirct';
import { 
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './../actions/NetworkActionTypes';

const networkInititalState = {
}

export default function NetworkReducer(state, action) {
  if (typeof state === 'undefined') {
    return networkInititalState;
  }

  switch(action.type){
    case REQUEST_BEGIN:
    //return {...state, busy: !state.busy}
    return Object.assign({}, state, {busy: true})
    case REQUEST_SUCCESS: 
    //return {...state, busy: !state.busy}
    console.log('REQUEST_SUCCESS',action)
    return Object.assign({}, state, {
      //busy: !state.busy,
      products: action.data
    })
    case REQUEST_FAILED:
    //return {...state, busy: !state.busy}
    return Object.assign({}, state, {busy: !state.busy})
  }
  return state;
};

