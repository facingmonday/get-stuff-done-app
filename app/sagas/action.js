import {
  all, call, put, takeLatest, select, race, delay,
} from 'redux-saga/effects';
import { Toast } from 'native-base';

// Constants
import {
  FETCH_ACTIONS, FETCH_ACTION, CREATE_ACTION, SAVE_ACTION, DELETE_ACTION, UPDATE_ACTION,
} from '../constants/action';
import { logoutUser } from '../actions/auth';

// Actions
import {
  setLoading, setError, setShowModal, setToast,
} from '../actions/app';

import {
  addActionToById,
  addMultipleActionToById,
  updateActionById,
  deleteActionById,
  saveActionSuccess,
} from '../actions/action';

// Selectors

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
    yield put(setLoading(true));
    const actions = yield call(fetchActionsApi, action.options);
    console.log('actions', actions);
    if (actions?.length) {
      yield put(addMultipleActionToById(actions));
    }
    yield put(setLoading(false));
  } catch (e) {
    console.log('e', e);
    yield put(setError(e));
    yield put(setLoading(false));
  }
}

function* performFetchActionAction(action) {
  try {
    yield put(setLoading(true));
    Toast.show({
      text: 'Test',
    });
    const actionObj = yield call(fetchActionApi, action.actionId);
    if (actionObj) {
      yield put(addActionToById(actionObj));
    } else {
      yield put(setError(new Error('Failed to fetch action.')));
    }
    yield put(setLoading(false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(e));
    yield put(setLoading(false));
  }
}

function* performCreateActionAction(action) {
  try {
    yield put(setLoading(true));
    yield call(createActionApi, action.action);
    yield put(addActionToById(action.action));
    yield put(setLoading(false));
  } catch (e) {
    console.log('e', e);
    yield put(setError(e));
    yield put(setLoading(false));
  }
}

function* performSaveActionSaga(action) {
  try {
    yield put(setLoading(true));
    yield call(createActionApi, action.action);
    yield put(addActionToById(action.action));
    yield put(saveActionSuccess());
    yield put(setToast({
      text: 'ActiomSaved',
      position: 'top',
    }));
    yield put(setLoading(false));
  } catch (e) {
    console.log('e', e);
    yield put(setError(e));
    yield put(setLoading(false));
  }
}
function* performUpdateActionAction(action) {
  try {
    if (action?.autoSave) {
      yield put(setLoading(true));
      const updatedAction = yield call(updateActionApi, action.action);
      if (updatedAction) {
        yield put(updateActionById(updatedAction));
      }
      yield put(setLoading(false));
    }
  } catch (e) {
    console.log('e', e);
    yield put(setError(e));
    yield put(setLoading(false));
  }
}

function* performDeleteActionAction(action) {
  try {
    yield put(setLoading(true));
    // Remove from server

    yield call(deleteActionApi, action.actionId);
    // Remove from local state
    yield put(deleteActionById(action.actionId));
    yield put(setLoading(false));
    yield put(setToast({
      text: 'Deleted successfully.',
    }));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(e));
    yield put(setLoading(false));
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
export function* saveActionSaga() {
  yield takeLatest(SAVE_ACTION, performSaveActionSaga);
}

export default function* defaultSaga() {
  return yield all([fetchActionsSaga(), fetchActionSaga(), updateActionSaga(), createActionSaga(), saveActionSaga(), deleteActionSaga()]);
}
