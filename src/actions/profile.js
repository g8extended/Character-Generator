import {
  UPDATE_PROFILE_ASSET
} from '../constants/profile';

export const updateProfileByOffset = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  dispatch({
    type: UPDATE_PROFILE_ASSET,
    payload: {
      assetID: assets.current,
      color: assets.currentColor,
      fileIndex: (length + profile[assets.current].fileIndex + offset) % length
    }
  });
};
