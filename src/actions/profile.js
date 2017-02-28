import {
  UPDATE_PROFILE_ASSET_FILE_INDEX,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_SUB_COLOR
} from '../constants/profile';

export const updateProfileAssetFileIndex = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  dispatch({
    type: UPDATE_PROFILE_ASSET_FILE_INDEX,
    payload: {
      assetID: assets.current,
      color: assets.currentColor,
      subColor: assets.currentSubColor,
      fileIndex: (length + profile[assets.current].fileIndex + offset) % length
    }
  });
};

export const updateProfileAssetColor = color => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_COLOR,
    payload: {
      assetID: getState().assets.current,
      color: color
    }
  });
};

export const updateProfileAssetSubColor = subColor => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_SUB_COLOR,
    payload: {
      assetID: getState().assets.current,
      subColor: subColor
    }
  });
};
