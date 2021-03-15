import { createSelector } from 'reselect';

const selectAssetsDomain = (state) => state.asset;

export const selectAssets = createSelector(
  selectAssetsDomain,
  ({ assets }) => assets,
);
