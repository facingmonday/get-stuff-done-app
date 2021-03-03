import {
  FETCH_ACTIONS,
  FETCH_ACTION,
  CREATE_ACTION,
  UPDATE_ACTION,
  DELETE_ACTION,
  ADD_ACTION_TO_BY_ID,
  ADD_MULTIPLE_ACTIONS_TO_BY_ID,
  UPDATE_ACTION_BY_ID,
  DELETE_ACTION_BY_ID,
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

export const deleteAction = (action) => ({
  type: DELETE_ACTION,
  action,
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

export const deleteActionById = (action) => ({
  type: DELETE_ACTION_BY_ID,
  action,
});
