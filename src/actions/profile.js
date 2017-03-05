import {
  UPDATE_PROFILE_ASSET,
  UPDATE_PROFILE_ASSET_TYPE,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY
} from '../constants/profile';

export const updateProfileAssetFileIndex = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const currentAsset = assets.items[assets.current.asset];
  const { asset, type, color } = assets.current;
  const files = currentAsset.types[type].colors[color].files;
  const length = files.length;
  dispatch({
    type: UPDATE_PROFILE_ASSET,
    asset: assets.current.asset,
    payload: {
      type,
      color,
      fileIndex: (length + profile[assets.current.asset].fileIndex + offset) % length,
      visible: true
    }
  });
};

export const updateProfileAssetType = type => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_TYPE,
    asset: getState().assets.current.asset,
    payload: {
      type
    }
  });
};

export const updateProfileAssetColor = color => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_COLOR,
    asset: getState().assets.current.asset,
    payload: {
      color
    }
  });
};

export const toggleProfileAssetVisible = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  dispatch({
    type: UPDATE_PROFILE_ASSET_VISIBILITY,
    asset: assets.current.asset,
    payload: {
      visible: ! profile[assets.current.asset].visible
    }
  });
};
