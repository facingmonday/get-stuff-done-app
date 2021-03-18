import {
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_FAILURE,
  LOGOUT_USER,
  EXTERNAL_LOGIN_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  UPLOAD_PROFILE_IMAGE,
  UPDATE_PROFILE,
  SAVE_PROFILE,
  SAVE_PROFILE_FAILURE,
  SAVE_PROFILE_SUCCESS,
  SIGN_IN_ANONYMOUSLY,
  SIGN_IN_ANONYMOUSLY_SUCCESS,
  SIGN_IN_ANONYMOUSLY_FAILURE,
  RESET,
} from '../constants/auth';

export function fetchMe() {
  return {
    type: FETCH_ME,
  };
}
export function fetchMeSuccess(response) {
  return {
    type: FETCH_ME_SUCCESS,
    response,
  };
}
export function fetchMeFailure(error) {
  return {
    type: FETCH_ME_FAILURE,
    error,
  };
}

export function loginUser(credentials) {
  return {
    type: LOGIN_USER,
    credentials,
  };
}
export function loginUserSuccess(response) {
  return {
    type: LOGIN_USER_SUCCESS,
    response,
  };
}
export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    error,
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
export function externalLoginSuccess(code) {
  return {
    type: EXTERNAL_LOGIN_SUCCESS,
    code,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function registerUser(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}
export function registerUserSuccess(response) {
  return {
    type: REGISTER_USER_SUCCESS,
    response,
  };
}
export function registerUserFailure(error) {
  return {
    type: REGISTER_USER_FAILURE,
    error,
  };
}
export function uploadProfileImage(uri) {
  return {
    type: UPLOAD_PROFILE_IMAGE,
    uri,
  };
}
export function updateProfile(user) {
  return {
    type: UPDATE_PROFILE,
    user,
  };
}
export function saveProfile(user) {
  return {
    type: SAVE_PROFILE,
    user,
  };
}
export function saveProfileSuccess(response) {
  return {
    type: SAVE_PROFILE_SUCCESS,
    response,
  };
}
export function saveProfileFailure(error) {
  return {
    type: SAVE_PROFILE_FAILURE,
    error,
  };
}
export function loginWithFacebook(credentials) {
  return {
    type: LOGIN_WITH_FACEBOOK,
    credentials,
  };
}
export function loginWithFacebookSuccess(user) {
  return {
    type: LOGIN_WITH_FACEBOOK_SUCCESS,
    user,
  };
}
export function loginWithFacebookFailure(error) {
  return {
    type: LOGIN_WITH_FACEBOOK_FAILURE,
    error,
  };
}
export function signInAnonymously(options) {
  return {
    type: SIGN_IN_ANONYMOUSLY,
    options,
  };
}
export function signInAnonymouslySuccess(user) {
  return {
    type: SIGN_IN_ANONYMOUSLY_SUCCESS,
    user,
  };
}
export function signInAnonymouslyFailure(error) {
  return {
    type: SIGN_IN_ANONYMOUSLY_FAILURE,
    error,
  };
}
