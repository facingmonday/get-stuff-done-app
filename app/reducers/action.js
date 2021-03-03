import {
  ADD_ACTION_TO_BY_ID,
  ADD_MULTIPLE_ACTIONS_TO_BY_ID,
  UPDATE_ACTION_BY_ID,
  DELETE_ACTION_BY_ID,
} from '../constants/action';

import { RESET } from '../constants/auth';

const initialState = {
  byId: {},
  currentAction: null,
  newAction: null,
  deletedAction: null,
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
          .filter((a) => action.id != a.actionId)
          .reduce((prev, a) => ({ ...prev, [a.id]: a })),
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
