import { combineReducers } from 'redux';
import ActionReducer from './action';
import AppReducer from './app';
import AssetReducer from './asset';
import AuthReducer from './auth';

const allReducers = combineReducers({
  action: ActionReducer,
  app: AppReducer,
  asset: AssetReducer,
  auth: AuthReducer,
});

export default allReducers;
