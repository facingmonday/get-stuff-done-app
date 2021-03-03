import {
  LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_FAILURE, SHOW_APP_ERROR, CLEAR_APP_ERROR,
} from '../constants/app';
import { RESET } from '../constants/auth';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
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
    case SHOW_APP_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CLEAR_APP_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
