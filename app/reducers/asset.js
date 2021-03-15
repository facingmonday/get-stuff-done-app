import {
  LOAD_ASSETS,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_FAILURE,
} from '@constants/asset';

const initialState = {
  loading: false,
  error: null,
  assets: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ASSETS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        assets: Array.isArray(action.assets)
          ? action.assets.reduce((prev, asset) => ({
            ...prev,
            [asset.name]: asset,
          }), {})
          : state.assets,
      };
    case LOAD_ASSETS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
