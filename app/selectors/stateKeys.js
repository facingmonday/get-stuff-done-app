import { createSelector } from 'reselect';

export const selectStateKeysDomain = (state) => state.stateKeys;

export const selectLoading = (stateKey) => createSelector(selectStateKeysDomain, ({ loading }) => loading[stateKey]);

export const selectError = (stateKey) => createSelector(selectStateKeysDomain, ({ error }) => error[stateKey]);

export const selectNextHref = (stateKey) => createSelector(selectStateKeysDomain, ({ nextHref }) => nextHref[stateKey]);
