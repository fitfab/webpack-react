import { combineReducers } from 'redux';
import NetworkReducer from './NetworkReducer';
import UIReducer from './UIReducer';

const RootReducer = combineReducers({
  NetworkReducer,
  UIReducer
});

export default RootReducer;