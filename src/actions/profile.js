import {
  UPDATE_PROFILE_ASSET,
  UPDATE_PROFILE_ASSET_TYPE,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY,
  MOVE_PROFILE_ASSET_TYPE
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

export const moveProfileAssetType = (which, shift) => (dispatch, getState) => {
  const { assets: { items, current: { asset } }, profile } = getState();
  const { type, color } = profile[asset];
  const { left, top } = items[asset].types[type].colors[color].files[0].style;
  const k = shift ? 10 : 1;
  const payload = {
    left: which % 2 ? left - (2 - which % 4) * k : left,
    top: which % 2 ? top : top + (1 - which % 4) * k
  };
  dispatch({
    type: MOVE_PROFILE_ASSET_TYPE,
    current: {
      asset,
      type,
    },
    payload
  });
};
