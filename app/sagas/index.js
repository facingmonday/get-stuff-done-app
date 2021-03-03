import { all } from 'redux-saga/effects';

import ActionSaga from './action';
import AppSaga from './app';
import AuthSaga from './auth';

export default function* rootSaga() {
  yield all([
    ActionSaga(),
    AppSaga(),
    AuthSaga(),
  ]);
}
