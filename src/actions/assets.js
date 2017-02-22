import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_ASSET_INDEX,
  SET_CURRENT_COLOR
} from '../constants/assets';
import { setCurrentHeaderNav } from '../actions/headerNav';
import keyBy from 'lodash/keyBy';
import axios from 'axios';

export const fetchAssets = () => dispatch => {
  dispatch({
    type: FETCH_ASSETS
  });    

  axios.get('api/assets/').then(res => {
    dispatch({
      type: FETCH_ASSETS_FULFILLED,
      payload: res
    });    
  });
};

export const setCurrentAsset = assetID => dispatch => {
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: assetID
  });
};

export const colorClick = colorID => dispatch => {
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: colorID
  });    
};

export const assetClick = assetID => (dispatch, getState) => {
  dispatch(setCurrentHeaderNav(keyBy(getState().assetsToHeaderNavMapping, 'assetID')[assetID].headerNavID));
  dispatch(setCurrentAsset(assetID));
};

export const incAsset = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  dispatch({
    type: SET_ASSET_INDEX,
    payload: {
      assetID: assets.current,
      color: assets.currentColor,
      fileIndex: (profile[assets.current].fileIndex + 1) % length
    }
  });
};

export const decAsset = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  dispatch({
    type: SET_ASSET_INDEX,
    payload: {
      assetID: assets.current,
      color: assets.currentColor,
      fileIndex: (length + profile[assets.current].fileIndex - 1) % length
    }
  });
};
