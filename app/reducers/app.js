import {
  LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_FAILURE, CLEAR_APP_ERROR, SET_ERROR, SET_LOADING, SET_NEXT_HREF, SET_SHOW_MODAL, SET_TOAST,
} from '../constants/app';
import { RESET } from '../constants/auth';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  showModal: false,
  toast: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOAD_APP_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case LOAD_APP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        loaded: true,
      };
    case CLEAR_APP_ERROR:
      return {
        ...state,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_NEXT_HREF:
      return {
        ...state,
        nextHref: action.nextHref,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.showModal,
      };
    case SET_TOAST:
      return {
        ...state,
        toast: action.toast,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
