import { all } from 'redux-saga/effects';

import ActionSaga from './action';
import AppSaga from './app';
import AuthSaga from './auth';
import AssetSaga from './asset';

export default function* rootSaga() {
  yield all([
    ActionSaga(),
    AppSaga(),
    AssetSaga(),
    AuthSaga(),
  ]);
}
