import { createSelector } from 'reselect';

const selectAppDomain = (state) => state.app;

export const selectApp = createSelector(
  selectAppDomain,
  (app) => app,
);

export const selectLoading = createSelector(
  selectApp,
  ({ loading }) => loading,
);

export const selectLoaded = createSelector(
  selectAppDomain,
  ({ loaded }) => loaded,
);
