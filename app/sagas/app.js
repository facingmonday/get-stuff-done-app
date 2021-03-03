import {
  all, call, put, takeLatest, select, delay,
} from 'redux-saga/effects';

// Constants
import { LOAD_APP } from '../constants/app';

// Actions
import {
  loadAppSuccess,
  loadAppFailure,
} from '../actions/app';
import { setNextHref } from '../actions/stateKeys';
import { fetchActions } from '../actions/action';

// Selectors
import { selectAuth } from '../selectors/auth';

// Services
import firebase from '../services/firebase';
import { navigate } from '../navigation/service';

// APIs
import { fetchActions as fetchActionsApi } from '../apis/action';

function* performLoadAppAction(action) {
  try {
    console.log('performLoadAppAction');
    yield put(loadAppSuccess());
  } catch (e) {
    console.log('performLoadAppAction', e);
    yield put(loadAppFailure(e));
  }
}

export function* loadAppSaga() {
  yield takeLatest(LOAD_APP, performLoadAppAction);
}

export default function* defaultSaga() {
  return yield all([loadAppSaga()]);
}
