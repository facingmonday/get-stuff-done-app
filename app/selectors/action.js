import { createSelector } from 'reselect';
import {
  addDays, format, getDate, getMonth, getYear, parse,
} from 'date-fns';

const selectActionsDomain = (state) => state.action;

export const selectAllActions = createSelector(
  selectActionsDomain,
  ({ byId }) => Object.values(byId),
);

export const makeSelectAvailableActions = () => createSelector(
  selectAllActions,
  (_, props) => props.today,
  (allActions, today) => {
    const startTime = today ? new Date() : addDays(new Date(), 1);
    const endTime = addDays(startTime, 1);

    const minTimestamp = new Date(getYear(startTime), getMonth(startTime), getDate(startTime)).getTime();
    const maxTimestamp = new Date(getYear(endTime), getMonth(endTime), getDate(endTime)).getTime();
    return allActions.filter((action) => action.date && action.date >= minTimestamp && action.date <= maxTimestamp);
  },
);

export const selectTodaysActions = createSelector(
  selectAllActions,
  (actions) => actions.filter((action) => {
    const todayStart = new Date();
    const todayEnd = addDays(todayStart, 1);

    const minTimestamp = new Date(getYear(todayStart), getMonth(todayStart), getDate(todayStart)).getTime();
    const maxTimestamp = new Date(getYear(todayEnd), getMonth(todayEnd), getDate(todayEnd)).getTime();
    return action.date && action.date >= minTimestamp && action.date <= maxTimestamp;
  }),
);

export const selectTomorrowsActions = createSelector(
  selectAllActions,
  (actions) => actions.filter((action) => {
    const tomorrowStart = addDays(new Date(), 1);
    const tomorrowEnd = addDays(tomorrowStart, 1);

    const minTimestamp = new Date(getYear(tomorrowStart), getMonth(tomorrowStart), getDate(tomorrowStart)).getTime();
    const maxTimestamp = new Date(getYear(tomorrowEnd), getMonth(tomorrowEnd), getDate(tomorrowEnd)).getTime();
    return action.date && action.date >= minTimestamp && action.date <= maxTimestamp;
  }),
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

export const selectComplete = createSelector(
  selectActionsDomain,
  ({ complete }) => complete,
);

export const selectDeletedActionLoading = createSelector(
  selectActionsDomain,
  ({ deletedAction: { loading } }) => loading,
);

export const selectActionsGroupedByDay = createSelector(
  selectAllActions,
  (actions) => {
    const groupedActions = actions
      .reduce((actionsGroupedByDay, action) => {
        const date = format(new Date(action.date), 'MM/dd/yyyy');
        return {
          ...actionsGroupedByDay,
          [date]: Array.isArray(actionsGroupedByDay[date]) ? actionsGroupedByDay[date].concat([action]) : [action],
        };
      }, {});

    return Object.keys(groupedActions)
      .sort((a, b) => {
        const dateA = parse(a, 'MM/dd/yyyy', new Date());
        const dateB = parse(b, 'MM/dd/yyyy', new Date());
        if (dateA.getTime() > dateB.getTime()) {
          return -1;
        } if (dateA.getTime() < dateB.getTime()) {
          return 1;
        }
        return 0;
      })
      .reduce((prev, key) => ({ ...prev, [key]: groupedActions[key] }), {});
  },
);
