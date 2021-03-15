import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_FAILURE,
  RESET_LOGGED_IN_USER,
  LOGOUT_USER,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  EXTERNAL_LOGIN_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  UPDATE_PROFILE,
  SAVE_PROFILE,
  SAVE_PROFILE_SUCCESS,
  SAVE_PROFILE_FAILURE,
  RESET,
} from '../constants/auth';

const initialState = {
  user: null,
  error: null,
  loading: false,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.response,
        token: action.response.token,
      };
    case LOGIN_USER_FAILURE:
      return {
        token: null,
        user: null,
        loading: false,
        error: action.error,
      };
    case RESET_LOGGED_IN_USER:
      return state;
    case LOGOUT_USER:
      return {
        ...initialState,
      };
    case FETCH_ME:
      return {
        ...state,
        loading: true,
        error: null,
        loaded: false,
      };
    case FETCH_ME_SUCCESS:
      return {
        ...state,
        token: action.response.token,
        user: action.response.user,
        loading: false,
        error: null,
      };
    case FETCH_ME_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case EXTERNAL_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.code,
      };
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        token: action.response.token,
        user: action.response.user,
        loading: false,
        error: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
      };
    case SAVE_PROFILE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: {
          ...state.user,
          ...action.user,
        },
      };
    case SAVE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGIN_WITH_FACEBOOK:
    case LOGIN_WITH_FACEBOOK_SUCCESS:
    case LOGIN_WITH_FACEBOOK_FAILURE:
    case RESET:
      return initialState;
    default:
      return state;
  }
};
