import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_ASSET_INDEX
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

export const assetClick = assetID => (dispatch, getState) => {
  dispatch(setCurrentHeaderNav(keyBy(getState().assetsToHeaderNavMapping, 'assetID')[assetID].headerNavID));
  dispatch(setCurrentAsset(assetID));
};

export const incAsset = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].files.length;
  dispatch({
    type: SET_ASSET_INDEX,
    key: assets.current,
    payload: (profile[assets.current] + 1) % length
  });    
};

export const decAsset = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  const length = assets.data[assets.current].files.length;
  dispatch({
    type: SET_ASSET_INDEX,
    key: assets.current,
    payload: (length + profile[assets.current] - 1) % length
  });    
};
