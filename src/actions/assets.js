import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR
} from '../constants/assets';
import { push } from 'react-router-redux'
import { setCurrentHeaderNav } from '../actions/headerNav';
import { updateProfileAssetColor } from '../actions/profile';
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

export const setCurrentAsset = assetID => (dispatch, getState) => {
  dispatch(push(`/${assetID.toLowerCase()}`));
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: {
      assetID,
      color: getState().profile[assetID].color
    }
  });
};

export const colorClick = color => dispatch => {
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: color
  });
  dispatch(updateProfileAssetColor(color));
};

export const assetClick = assetID => (dispatch, getState) => {
  const mapping = keyBy(getState().assetsToHeaderNavMapping, 'assetID')[assetID];
  mapping && dispatch(setCurrentHeaderNav(mapping.headerNavID));
  dispatch(setCurrentAsset(assetID));
};
