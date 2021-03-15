import {
  FETCH_ACTIONS,
  FETCH_ACTION,
  CREATE_ACTION,
  SAVE_ACTION,
  SAVE_ACTION_SUCCESS,
  SAVE_ACTION_FAILURE,
  UPDATE_ACTION,
  DELETE_ACTION,
  ADD_ACTION_TO_BY_ID,
  ADD_MULTIPLE_ACTIONS_TO_BY_ID,
  UPDATE_ACTION_BY_ID,
  DELETE_ACTION_BY_ID,
  RESET_ACTION,
} from '../constants/action';

export const fetchActions = (options) => ({
  type: FETCH_ACTIONS,
  options,
});

export const fetchAction = (actionId) => ({
  type: FETCH_ACTION,
  actionId,
});

export const createAction = (action) => ({
  type: CREATE_ACTION,
  action,
});

export const updateAction = (action, autoSave = true) => ({
  type: UPDATE_ACTION,
  action,
  autoSave,
});

export const deleteAction = (actionId) => ({
  type: DELETE_ACTION,
  actionId,
});

export const addActionToById = (action) => ({
  type: ADD_ACTION_TO_BY_ID,
  action,
});

export const addMultipleActionToById = (actions) => ({
  type: ADD_MULTIPLE_ACTIONS_TO_BY_ID,
  actions,
});

export const updateActionById = (action) => ({
  type: UPDATE_ACTION_BY_ID,
  action,
});

export const deleteActionById = (actionId) => ({
  type: DELETE_ACTION_BY_ID,
  actionId,
});

export function saveAction(action) {
  return {
    type: SAVE_ACTION,
    action,
  };
}
export function saveActionSuccess(response) {
  return {
    type: SAVE_ACTION_SUCCESS,
    response,
  };
}
export function saveActionFailure(error) {
  return {
    type: SAVE_ACTION_FAILURE,
    error,
  };
}
export function resetAction() {
  return {
    type: RESET_ACTION,
  };
}
