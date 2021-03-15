import {
  LOAD_ASSETS,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_FAILURE,
} from '../constants/asset';

export function loadAssets() {
  return {
    type: LOAD_ASSETS,
  };
}
export function loadAssetsSuccess(assets) {
  return {
    type: LOAD_ASSETS_SUCCESS,
    assets,
  };
}
export function loadAssetsFailure(errors) {
  return {
    type: LOAD_ASSETS_FAILURE,
    errors,
  };
}
