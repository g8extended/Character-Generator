import {
  UPDATE_PROFILE_ASSET_FILE_INDEX,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_SUB_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY
} from '../constants/profile';

export const updateProfileAssetFileIndex = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.items[assets.current.asset].colors[assets.current.color].files.length;
  dispatch({
    type: UPDATE_PROFILE_ASSET_FILE_INDEX,
    payload: {
      asset: assets.current.asset,
      color: assets.current.color,
      subColor: assets.currentSubColor,
      fileIndex: (length + profile[assets.current.asset].fileIndex + offset) % length,
      visible: true
    }
  });
};

export const updateProfileAssetColor = color => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_COLOR,
    payload: {
      asset: getState().assets.current.asset,
      color: color
    }
  });
};

export const updateProfileAssetSubColor = subColor => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_SUB_COLOR,
    payload: {
      asset: getState().assets.current.asset,
      subColor: subColor
    }
  });
};

export const toggleProfileAssetVisible = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  dispatch({
    type: UPDATE_PROFILE_ASSET_VISIBILITY,
    payload: {
      asset: assets.current.asset,
      visible: ! profile[assets.current.asset].visible
    }
  });
};
