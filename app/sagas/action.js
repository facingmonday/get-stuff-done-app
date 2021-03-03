import {
  all, call, put, takeLatest, select, race, delay,
} from 'redux-saga/effects';

// Constants
import {
  FETCH_ACTIONS, FETCH_ACTION, CREATE_ACTION, DELETE_ACTION, UPDATE_ACTION,
} from '../constants/action';
import { logoutUser } from '../actions/auth';

// Actions
import {
  setLoading, setError, setNextHref,
} from '../actions/stateKeys';

// Selectors
import { selectNextHref } from '../selectors/stateKeys';

import {
  addActionToById,
  addMultipleActionToById,
  updateActionById,
  deleteActionById,
} from '../actions/action';

import { navigate } from '../navigation/service';

import firebase, {
  getCollection, getDocument, updateDocument, deleteDocument, getCurrentUser,
} from '../services/firebase';

import {
  createAction as createActionApi,
  deleteAction as deleteActionApi,
  fetchActions as fetchActionsApi,
  fetchAction as fetchActionApi,
  updateAction as updateActionApi,

} from '../apis/action';

const STATE_KEY = 'action';

export function* performFetchActionsAction(action = {}) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const actions = yield call(fetchActionsApi, action.options);
    if (actions?.length) {
      yield put(addMultipleActionToById(actions));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    console.log('e', e);
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

function* performFetchActionAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const actionObj = yield call(fetchActionApi, action.actionId);
    if (actionObj) {
      yield put(addActionToById(actionObj));
    } else {
      yield put(setError(STATE_KEY, new Error('Failed to fetch action.')));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

function* performUpdateActionAction(action) {
  try {
    if (action?.autoSave) {
      yield put(setLoading(STATE_KEY, true));
      const updatedAction = yield call(updateActionApi, action.action);
      if (updatedAction) {
        yield put(updateActionById(updatedAction));
      }
      yield put(setLoading(STATE_KEY, false));
    }
  } catch (e) {
    console.log('e', e);
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

function* performCreateActionAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const actionObj = yield call(createActionApi, action.action);
    if (actionObj) {
      yield put(addActionToById(actionObj));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    console.log('e', e);
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

function* performDeleteActionAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    // Remove from server
    yield call(deleteActionApi, action.actionId);
    // Remove from local state
    yield put(deleteActionById(action.actionId));
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

export function* fetchActionsSaga() {
  yield takeLatest(FETCH_ACTIONS, performFetchActionsAction);
}
export function* fetchActionSaga() {
  yield takeLatest(FETCH_ACTION, performFetchActionAction);
}
export function* updateActionSaga() {
  yield takeLatest(UPDATE_ACTION, performUpdateActionAction);
}
export function* createActionSaga() {
  yield takeLatest(CREATE_ACTION, performCreateActionAction);
}
export function* deleteActionSaga() {
  yield takeLatest(DELETE_ACTION, performDeleteActionAction);
}

export default function* defaultSaga() {
  return yield all([fetchActionsSaga(), fetchActionSaga(), updateActionSaga(), createActionSaga(), deleteActionSaga()]);
}
