import {
  all, call, put, takeLatest, delay, select,
} from 'redux-saga/effects';

// Constants
import {
  FETCH_ME, LOGIN_USER, LOGOUT_USER, REGISTER_USER, SAVE_PROFILE, UPLOAD_PROFILE_IMAGE,
} from '../constants/auth';

// Actions
import {
  loginUserSuccess,
  loginUserFailure,
  registerUserSuccess,
  registerUserFailure,
  saveProfileSuccess,
  saveProfileFailure,
} from '../actions/auth';
import {
  setLoading, setError, setNextHref,
} from '../actions/stateKeys';

// Selectors
import { selectNextHref } from '../selectors/stateKeys';

// Services
import firebase from '../services/firebase';

import {
  createUserWithEmailAndPassword,
  getCurrentUser,
  reload,
  saveProfile,
  signInWithEmailAndPassword,
  signOut,
} from '../apis/auth';

const STATE_KEY = 'auth';

export function* performFetchMeAction() {
  try {
    yield put(setLoading(STATE_KEY, true));
    yield call(reload);
    yield put(setLoading(STATE_KEY, false));
  } catch (err) {
    yield put(setLoading(STATE_KEY, false));
  }
}

export function* performLoginUserAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { credentials: { email, password } } = action;
    const { user } = yield call(signInWithEmailAndPassword, email, password);
    if (user) {
      yield put(loginUserSuccess(user.toJSON()));
    } else {
      yield put(loginUserFailure(new Error('Failed to login')));
    }
    yield put(setLoading(STATE_KEY, true));
  } catch (e) {
    console.log('e', e);
    yield put(loginUserFailure(new Error('Failed to login.')));
  }
}

export function* performLogoutUserAction() {
  try {
    yield put(setLoading(STATE_KEY, true));
    yield call(signOut);
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    yield put(loginUserFailure(e));
  }
}

export function* performRegisterUserAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const user = yield call(
      createUserWithEmailAndPassword,
      action.credentials.email,
      action.credentials.password,
    );
    if (user) {
      yield put(registerUserSuccess(user));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    console.log('e', e);
    yield put(registerUserFailure(e));
  }
}

export function* performSaveProfileAction(action) {
  try {
    const currentUser = yield call(getCurrentUser);
    if (currentUser) {
      const userProfile = call(saveProfile, {
        displayName: action.user.name,
      });
      if (userProfile) {
        yield put(saveProfileSuccess(userProfile));
      }
    }
  } catch (e) {
    yield put(saveProfileFailure(e));
  }
}

const getBlob = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};
const uploadImage = async (id, blob) => {
  const storageRef = firebase.storage().ref(`/${id}/profileImage`);
  const firestoreResponse = await storageRef.put(blob);
  const imageUrl = await firestoreResponse.ref.getDownloadURL();
  return imageUrl;
};

export function* performUploadProfileImageAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const currentUser = yield call(getCurrentUser);
    const blob = yield call(getBlob, action.uri);
    const imageUrl = yield call(uploadImage, currentUser.uid, blob);
    const profile = yield call(saveProfile, { photoUrl: imageUrl });
    if (profile) {
      yield put(saveProfileSuccess(profile));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

export function* saveProfileSaga() {
  yield takeLatest(SAVE_PROFILE, performSaveProfileAction);
}

export function* fetchMeSaga() {
  yield takeLatest(FETCH_ME, performFetchMeAction);
}

export function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, performLoginUserAction);
}

export function* logoutUserSaga() {
  yield takeLatest(LOGOUT_USER, performLogoutUserAction);
}

export function* registerUserSaga() {
  yield takeLatest(REGISTER_USER, performRegisterUserAction);
}

export function* uploadProfileImageSaga() {
  yield takeLatest(UPLOAD_PROFILE_IMAGE, performUploadProfileImageAction);
}

export default function* defaultSaga() {
  return yield all([fetchMeSaga(), loginUserSaga(), logoutUserSaga(), registerUserSaga(), uploadProfileImageSaga()]);
}
