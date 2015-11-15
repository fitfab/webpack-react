import { 
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './../actions/NetworkActionTypes';

export default function NetworkReducer(state, action) {
  if (typeof state === 'undefined') {
    return {}
  }
  switch(action.type){
    case REQUEST_BEGIN:
    return {...state, busy: !state.busy}
    case REQUEST_SUCCESS: 
    return {...state, busy: !state.busy}
    case REQUEST_FAILED:
    return {...state, busy: !state.busy}
    default:
    return state
  }
};

