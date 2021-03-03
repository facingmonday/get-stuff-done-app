import { createSelector } from 'reselect';
// import config from '../../config/defaults';

export const selectAuth = (state) => state.auth;

export const selectCurrentUser = createSelector(
  selectAuth,
  ({ user }) => user,
);

export const selectNavigation = createSelector(
  selectAuth,
  () => ([
    {
      name: 'home',
      label: 'Home',
      path: 'home',
    },
  ]),
);
