import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR
} from '../constants/assets';
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
  const colors = getState().assets.data[assetID].colors;
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: {
      assetID,
      color: colors[Object.keys(colors)[0]].id
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
  dispatch(setCurrentHeaderNav(keyBy(getState().assetsToHeaderNavMapping, 'assetID')[assetID].headerNavID));
  dispatch(setCurrentAsset(assetID));
};
