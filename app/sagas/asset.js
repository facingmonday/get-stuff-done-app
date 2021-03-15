import {
  all, call, put, takeLatest, delay, select,
} from 'redux-saga/effects';
import { Asset } from 'expo-asset';

import { LOAD_ASSETS } from '@constants/asset';

import {
  loadAssetsSuccess,
  loadAssetsFailure,
} from '@actions/asset';

export function* performLoadAssetsSaga() {
  try {
    const assets = yield call(Asset.loadAsync, [
      require('../../assets/w.png'),
      require('../../assets/l.png'),
      require('../../assets/splash.png'),
      require('../../assets/background-darker.png'),
      require('../../assets/logo.png'),
    ]);
    yield put(loadAssetsSuccess(assets));
  } catch (e) {
    yield put(loadAssetsFailure(e));
  }
}
export function* loadAssetsSaga() {
  yield takeLatest(LOAD_ASSETS, performLoadAssetsSaga);
}

export default function* defaultSaga() {
  return yield all([
    loadAssetsSaga(),
  ]);
}
