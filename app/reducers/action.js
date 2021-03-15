import {
  ADD_ACTION_TO_BY_ID,
  ADD_MULTIPLE_ACTIONS_TO_BY_ID,
  UPDATE_ACTION_BY_ID,
  DELETE_ACTION_BY_ID,
  SAVE_ACTION,
  SAVE_ACTION_SUCCESS,
  SAVE_ACTION_FAILURE,
  RESET_ACTION,
} from '../constants/action';

import { RESET } from '../constants/auth';

const initialState = {
  loading: false,
  error: null,
  complete: false,
  byId: {},
  currentAction: null,
  newAction: {
    loading: false,
    error: null,
    action: null,
  },
  deletedAction: {
    loading: false,
    error: null,
    action: null,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTION_TO_BY_ID:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.action.id]: action.action,
        },
      };
    case ADD_MULTIPLE_ACTIONS_TO_BY_ID:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...(action.actions.reduce((prev, a) => ({ ...prev, [a.id]: a }), {})),
        },
      };
    case UPDATE_ACTION_BY_ID:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.action.id]: action.action,
        },
      };
    case DELETE_ACTION_BY_ID:
      return {
        ...state,
        byId: Object.values(state.byId)
          .filter((a) => a.id != action.actionId)
          .reduce((prev, a) => ({ ...prev, [a.id]: a }), {}),
      };
    case SAVE_ACTION:
      return {
        ...state,
        complete: false,
      };
    case SAVE_ACTION_SUCCESS:
      return {
        ...state,
        complete: true,
      };
    case RESET_ACTION:
      return {
        ...state,
        loading: false,
        error: null,
        complete: false,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
