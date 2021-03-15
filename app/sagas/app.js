import {
  all, call, put, takeLatest, select, delay,
} from 'redux-saga/effects';
import { Toast } from 'native-base';
// Constants
import { loadAssets } from '@actions/asset';
import { LOAD_APP } from '../constants/app';

// Actions
import {
  loadAppSuccess,
  loadAppFailure,
} from '../actions/app';

// Selectors
import { selectAuth } from '../selectors/auth';

// Services
import firebase from '../services/firebase';
import { navigate } from '../navigation/service';

// APIs
import { fetchActions as fetchActionsApi } from '../apis/action';

function* performLoadAppAction(action) {
  try {
    yield put(loadAssets());
    yield put(loadAppSuccess());
  } catch (e) {
    yield put(loadAppFailure(e));
  }
}

export function* loadAppSaga() {
  yield takeLatest(LOAD_APP, performLoadAppAction);
}

export default function* defaultSaga() {
  return yield all([loadAppSaga()]);
}
