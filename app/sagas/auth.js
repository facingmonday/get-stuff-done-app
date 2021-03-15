import {
  all, call, put, takeLatest, delay, select,
} from 'redux-saga/effects';

// Constants
import {
  FETCH_ME,
  LOGIN_USER,
  LOGIN_WITH_FACEBOOK,
  LOGOUT_USER,
  REGISTER_USER,
  SAVE_PROFILE,
  UPLOAD_PROFILE_IMAGE,
  SIGN_IN_ANONYMOUSLY,
} from '../constants/auth';

// Actions
import {
  loginUserSuccess,
  loginUserFailure,
  loginWithFacebookSuccess,
  loginWithFacebookFailure,
  registerUserSuccess,
  registerUserFailure,
  saveProfileSuccess,
  saveProfileFailure,
  signInAnonymouslySuccess,
  signInAnonymouslyFailure,
} from '../actions/auth';
import {
  setLoading, setError,
} from '../actions/app';

// Services
import firebase from '../services/firebase';
import { navigate } from '../navigation/service';

import {
  createUserWithEmailAndPassword,
  getCurrentUser,
  reload,
  saveProfile,
  signInWithEmailAndPassword,
  signOut,
  loginWithFacebook,
  signInAnonymously,
} from '../apis/auth';

const STATE_KEY = 'auth';

export function* performFetchMeAction() {
  try {
    yield put(setLoading(true));
    yield call(reload);
    const { currentUser } = firebase.auth();
    console.log('currentUser', currentUser);
    yield put(loginUserSuccess(currentUser.toJSON()));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
  }
}

export function* performLoginUserAction(action) {
  try {
    yield put(setLoading(true));
    const { credentials: { email, password } } = action;
    const { user } = yield call(signInWithEmailAndPassword, email, password);
    if (user) {
      yield put(loginUserSuccess(user.toJSON()));
    } else {
      yield put(loginUserFailure(new Error('Failed to login')));
    }
    yield put(setLoading(true));
  } catch (e) {
    console.log('e', e);
    yield put(loginUserFailure(new Error('Failed to login.')));
  }
}

export function* performLogoutUserAction() {
  try {
    yield put(setLoading(true));
    yield call(signOut);
    yield put(setLoading(false));
    navigate('GetStarted');
  } catch (e) {
    yield put(loginUserFailure(e));
  }
}

export function* performRegisterUserAction(action) {
  try {
    yield put(setLoading(true));
    const user = yield call(
      createUserWithEmailAndPassword,
      action.credentials.email,
      action.credentials.password,
    );
    if (user) {
      yield put(registerUserSuccess(user));
    }
    yield put(setLoading(false));
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
    yield put(setLoading(true));
    const currentUser = yield call(getCurrentUser);
    const blob = yield call(getBlob, action.uri);
    const imageUrl = yield call(uploadImage, currentUser.uid, blob);
    const profile = yield call(saveProfile, { photoUrl: imageUrl });
    if (profile) {
      yield put(saveProfileSuccess(profile));
    }
    yield put(setLoading(false));
  } catch (e) {
    yield put(setError(e));
    yield put(setLoading(false));
  }
}

export function* performLoginWithFacebookAction() {
  try {
    yield put(setLoading(true));
    const user = yield call(loginWithFacebook);
    console.log('user', user);
    if (user) {
      yield put(loginWithFacebookSuccess(user));
    } else {
      yield put(loginWithFacebookFailure(new Error('Failed to login')));
    }
    yield put(setLoading(true));
  } catch (e) {
    console.log('e', e);
    yield put(loginWithFacebookFailure(new Error('Failed to login.')));
    yield put(setLoading(false));
  }
}

export function* performSignInAnonymouslyAction(action) {
  try {
    yield put(setLoading(true));
    const { user } = yield call(signInAnonymously);
    console.log('user', user);
    if (user) {
      yield put(signInAnonymouslySuccess(user));
    } else {
      yield put(signInAnonymouslyFailure(new Error('Failed')));
    }
    yield put(setLoading(false));
  } catch (e) {
    yield put(setError(e));
    yield put(setLoading(false));
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
export function* loginWithFacebookSaga() {
  yield takeLatest(LOGIN_WITH_FACEBOOK, performLoginWithFacebookAction);
}
export function* signInAnonymouslySaga() {
  yield takeLatest(SIGN_IN_ANONYMOUSLY, performSignInAnonymouslyAction);
}

export default function* defaultSaga() {
  return yield all([
    fetchMeSaga(),
    loginUserSaga(),
    logoutUserSaga(),
    registerUserSaga(),
    uploadProfileImageSaga(),
    loginWithFacebookSaga(),
    signInAnonymouslySaga(),
  ]);
}
