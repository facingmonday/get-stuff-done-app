import {
  SET_LOADING, SET_ERROR, SET_NEXT_HREF, RESET_STATE_KEY, RESET_ALL_STATE_KEYS,
} from '../constants/stateKeys';

const initialState = {
  loading: {
    action: false,
    actionType: false,
    app: false,
    product: false,
    subscription: false,
    role: false,
    user: false,
  },
  error: {
    action: null,
    actionType: null,
    app: null,
    category: null,
    price: null,
    product: null,
    role: null,
    subscription: null,
    user: null,
  },
  nextHref: {
    action: null,
    actionType: null,
    app: null,
    category: null,
    price: null,
    product: null,
    role: null,
    subscription: null,
    user: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.stateKey]: action.loading,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.stateKey]: action.error,
        },
      };
    case SET_NEXT_HREF:
      return {
        ...state,
        nextHref: {
          ...state.nextHref,
          [action.stateKey]: action.nextHref,
        },
      };
    case RESET_STATE_KEY:
      return {
        loading: {
          ...state.loading,
          [action.stateKey]: false,
        },
        error: {
          ...state.error,
          [action.stateKey]: null,
        },
        nextHref: {
          ...state.nextHref,
          [action.stateKey]: null,
        },
      };
    case RESET_ALL_STATE_KEYS:
      return initialState;
    default:
      return state;
  }
}
