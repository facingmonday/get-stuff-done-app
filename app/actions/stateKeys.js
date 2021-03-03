import {
  SET_LOADING, SET_ERROR, SET_NEXT_HREF, RESET_STATE_KEY, RESET_ALL_STATE_KEYS,
} from '../constants/stateKeys';

export function setLoading(stateKey, loading) {
  return {
    type: SET_LOADING,
    stateKey,
    loading,
  };
}
export function setError(stateKey, error) {
  return {
    type: SET_ERROR,
    stateKey,
    error,
  };
}
export function setNextHref(stateKey, nextHref) {
  return {
    type: SET_NEXT_HREF,
    stateKey,
    nextHref,
  };
}
export function resetStateKey(stateKey) {
  return {
    type: RESET_STATE_KEY,
    stateKey,
  };
}
export function resetAllStateKeys() {
  return {
    type: RESET_ALL_STATE_KEYS,
  };
}
