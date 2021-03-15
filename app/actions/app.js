import {
  LOAD_APP,
  LOAD_APP_SUCCESS,
  LOAD_APP_FAILURE,
  CLEAR_APP_ERROR,
  NAVIGATE,
  SET_LOADING,
  SET_SHOW_MODAL,
  SET_ERROR,
  SET_NEXT_HREF,
  SET_TOAST,
  RESET,
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
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}
export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}
export function setNextHref(nextHref) {
  return {
    type: SET_NEXT_HREF,
    nextHref,
  };
}
export function setShowModal(showModal) {
  return {
    type: SET_SHOW_MODAL,
    showModal,
  };
}
export function setToast(toast) {
  return {
    type: SET_TOAST,
    toast,
  };
}
export function resetApp() {
  return ({
    type: RESET,
  });
}
