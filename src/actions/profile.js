import {
  UPDATE_PROFILE_ASSET_FILE_INDEX
} from '../constants/profile';

export const updateProfileAssetFileIndex = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  dispatch({
    type: UPDATE_PROFILE_ASSET_FILE_INDEX,
    payload: {
      assetID: assets.current,
      fileIndex: (length + profile[assets.current].fileIndex + offset) % length
    }
  });
};
