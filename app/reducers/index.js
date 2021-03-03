import { combineReducers } from 'redux';
import ActionReducer from './action';
import AppReducer from './app';
import AuthReducer from './auth';
import StateKeysReducer from './stateKeys';

const allReducers = combineReducers({
  action: ActionReducer,
  app: AppReducer,
  auth: AuthReducer,
  stateKeys: StateKeysReducer,
});

export default allReducers;
