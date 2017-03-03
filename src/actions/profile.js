import {
  UPDATE_PROFILE_ASSET,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_SUB_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY
} from '../constants/profile';

export const updateProfileAssetFileIndex = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const currentAsset = assets.items[assets.current.asset];
  const { asset, color, subColor } = assets.current;
  const files = currentAsset.subColors ? currentAsset.colors[color].colors[subColor].files : currentAsset.colors[color].files;
  const length = files.length;
  dispatch({
    type: UPDATE_PROFILE_ASSET,
    asset: assets.current.asset,
    payload: {
      color: color,
      subColor: subColor,
      fileIndex: (length + profile[assets.current.asset].fileIndex + offset) % length,
      visible: true
    }
  });
};

export const updateProfileAssetColor = color => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_COLOR,
    asset: getState().assets.current.asset,
    payload: {
      color: color
    }
  });
};

export const updateProfileAssetSubColor = subColor => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_SUB_COLOR,
    asset: getState().assets.current.asset,
    payload: {
      subColor: subColor
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
