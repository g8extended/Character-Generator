import {
  UPDATE_PROFILE_ASSET,
  UPDATE_PROFILE_ASSET_TYPE,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY
} from '../constants/profile';
import { getIndexByOffset, getFiles } from '../utils/files';

export const updateProfileAssetFileIndex = offset => (dispatch, getState) => {
  const { assets, profile } = getState();
  const files = getFiles(assets);
  const fileIndex = profile[assets.current.asset].fileIndex;
  const newIndex = getIndexByOffset(files.length, fileIndex, offset);
  dispatch({
    type: UPDATE_PROFILE_ASSET,
    asset: assets.current.asset,
    payload: {
      type: files[newIndex].type,
      color: files[newIndex].color,
      fileIndex: newIndex,
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
