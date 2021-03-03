import {
  LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_FAILURE, SHOW_APP_ERROR, CLEAR_APP_ERROR, NAVIGATE,
} from '../constants/app';

export function loadApp() {
  return {
    type: LOAD_APP,
  };
}
export function loadAppSuccess(app) {
  return {
    type: LOAD_APP_SUCCESS,
    app,
  };
}
export function loadAppFailure(error) {
  return {
    type: LOAD_APP_FAILURE,
    error,
  };
}
export function showAppError(error) {
  return {
    type: SHOW_APP_ERROR,
    error,
  };
}
export function clearAppError() {
  return {
    type: CLEAR_APP_ERROR,
  };
}
export function navigate(route) {
  return {
    type: NAVIGATE,
    route,
  };
}
