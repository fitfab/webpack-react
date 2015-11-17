'use stirct';
import { 
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './../actions/NetworkActionTypes';

const networkInititalState = {
    products: []
}
function updateMemberList(state, members){
}

export default function NetworkReducer(state, action) {
  if (typeof state === 'undefined') {
    return networkInititalState;
  }

  switch(action.type){
    case REQUEST_BEGIN:
    //return {...state, busy: !state.busy}
    return Object.assign({}, state, {busy: !state.busy})
    case REQUEST_SUCCESS: 
    //return {...state, busy: !state.busy}
    return Object.assign({}, state, {
      busy: !state.busy,
      products: action.products
    })
    case REQUEST_FAILED:
    //return {...state, busy: !state.busy}
    return Object.assign({}, state, {busy: !state.busy})
  }
  return state;
};

