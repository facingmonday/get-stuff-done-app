import {
  all, call, put, takeLatest, select, race, delay,
} from 'redux-saga/effects';
import {
  FETCH_{{uppercase}}S, FETCH_{{uppercase}}, SAVE_{{uppercase}}, DELETE_{{uppercase}},
} from '../constants/{{camelCaseName}}';
import { setLoading, setError } from '../actions/stateKeys';

import { logoutUser } from '../actions/auth';

import { create{{PascalCase}}, update{{PascalCase}}, delete{{PascalCase}} } from '../actions/{{camelCaseName}}';

import {
  fetch{{PascalCase}}s as fetch{{PascalCase}}sApi,
  fetch{{PascalCase}} as fetch{{PascalCase}}Api,
  save{{PascalCase}} as save{{PascalCase}}Api,
  delete{{PascalCase}} as delete{{PascalCase}}Api,
} from '../apis/{{camelCaseName}}';

const STATE_KEY = '{{camelCaseName}}';

function* performFetch{{PascalCase}}sAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(fetch{{PascalCase}}sApi, action.option),
      timeout: delay(10000),
    });
    if (response?.data?.results?.length) {
      const actions = yield all(response.data.results.map((action) => put(create{{PascalCase}}(action))));
    } else if (timeout) {
      yield put(setError(new Error('Timeout has occurred.')));
    } else {
      yield put(setError(new Error('Unknown error has occurred.')));
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
function* performFetch{{PascalCase}}Action(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(fetch{{PascalCase}}Api, action.actionId),
      timeout: call(delay, 10000),
    });
    if (response?.actionId) {
      yield put(create{{PascalCase}}(action));
      const nextHref = yield select(selectNextHref(STATE_KEY));
      if (nextHref) {
        yield put(push(nextHref));
      }
    } else {
      yield put(setError(new Error('Timout has occured')));
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

function* performSave{{PascalCase}}Action(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(save{{PascalCase}}Api, action.action),
      timeout: call(delay, 10000),
    });
    if (response?.actionId) {
      yield put(update{{PascalCase}}(action));
      const nextHref = yield select(selectNextHref(STATE_KEY));
      if (nextHref) {
        yield put(push(nextHref));
      }
    } else {
      yield put(setError(new Error('Timout has occured')));
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

function* performDelete{{PascalCase}}Action(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(delete{{PascalCase}}Api, action.action),
      timeout: call(delay, 10000),
    });
    if (response?.actionId) {
      yield put(delete{{PascalCase}}(action));
      const nextHref = yield select(selectNextHref(STATE_KEY));
      if (nextHref) {
        yield put(push(nextHref));
      }
    } else {
      yield put(setError(new Error('Timout has occured')));
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

export function* fetch{{PascalCase}}sSaga() {
  yield takeLatest(FETCH_{{uppercase}}S, performFetch{{PascalCase}}sAction);
}

export function* fetch{{PascalCase}}Saga() {
  yield takeLatest(FETCH_{{uppercase}}, performFetch{{PascalCase}}Action);
}

export function* save{{PascalCase}}Saga() {
  yield takeLatest(SAVE_{{uppercase}}, performSave{{PascalCase}}Action);
}

export function* delete{{PascalCase}}Saga() {
  yield takeLatest(DELETE_{{uppercase}}, performDelete{{PascalCase}}Action);
}

export default function* defaultSaga() {
  return yield all([fetch{{PascalCase}}sSaga(), fetch{{PascalCase}}Saga(), save{{PascalCase}}Saga(), delete{{PascalCase}}Saga()]);
}
