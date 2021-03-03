import { createSelector } from 'reselect';
import { selectAuth } from './auth';

const selectActionsDomain = (state) => state.action;

export const selectAllActions = createSelector(
  selectActionsDomain,
  ({ byId }) => Object.values(byId),
);

export const selectAllCompletedActions = createSelector(
  selectAllActions,
  (actions) => actions.filter((a) => a.completed),
);
export const makeSelectActionById = () => createSelector(
  selectActionsDomain,
  (_, actionId) => actionId,
  ({ byId }, actionId) => byId[typeof actionId === 'object' ? actionId.actionId : actionId],
);

export const selectActionsByActionTypeId = (actionTypeId) => createSelector(
  selectAllActions,
  (actions) => actions.filter((action) => action.actionTypeId == actionTypeId),
);

export const selectAvailableActionTags = createSelector(
  selectAllActions,
  (actions) => actions
    .reduce((prev, curr) => prev.concat(Array.isArray(curr.tags) ? curr.tags : []), [])
    .reduce((prev, curr) => (prev.some((tag) => tag.id) ? prev : prev.concat([curr])), []),
);
