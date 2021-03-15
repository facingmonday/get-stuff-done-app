import { createSelector } from 'reselect';

const selectAppDomain = (state) => state.app;

export const selectApp = createSelector(
  selectAppDomain,
  (app) => app,
);

export const selectLoading = createSelector(
  selectApp,
  (app) => {
    console.log('app.loading', app);
    return app?.loading;
  },
);

export const selectLoaded = createSelector(
  selectAppDomain,
  ({ loaded }) => loaded,
);

export const selectError = createSelector(
  selectAppDomain,
  ({ error }) => error,
);

export const selectNextHref = createSelector(
  selectAppDomain,
  ({ nextHref }) => nextHref,
);

export const selectShowModal = createSelector(
  selectAppDomain,
  ({ showModal }) => showModal,
);

export const selectToast = createSelector(
  selectAppDomain,
  ({ toast }) => toast,
);
