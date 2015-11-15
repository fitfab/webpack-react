import { 
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from './../actions/NetworkActionTypes';

const networkInititalState = {
    products: [
      {name: 'Never Say Goodbye', price:'100', year: '1980'},
      {name: 'Hello', price:'11', year: '2015'},
      {name: 'we dont need another hero', price:'25', year: '1984'},
      {name: 'Besame', price:'5', year: '1960'},
      {name: 'Azucar', price:'13', year: '1988'}
    ]
}
export default function NetworkReducer(state, action) {
  if (typeof state === 'undefined') {
    return networkInititalState;
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

