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
    dispatch(setCurrentAsset(res.data[0].id));
    dispatch(setCurrentColor(res.data[0].colors[0].id));
  });
};

export const setCurrentAsset = assetID => (dispatch, getState) => {
  const state = getState();
  const profileAsset = state.profile[assetID];
  const color = profileAsset ? profileAsset.color : state.assets[assetID].colors[0];
  dispatch(push(`/${assetID.toLowerCase()}/${color}`));
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: {
      assetID,
      color: color
    }
  });
};

export const setCurrentColor = color => (dispatch, getState) => {
  const assetID = getState().assets.current;
  dispatch(push(`/${assetID.toLowerCase()}/${color}`));
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: color
  });
};

export const colorClick = color => dispatch => {
  dispatch(setCurrentColor(color));
  dispatch(updateProfileAssetColor(color));
};

export const assetClick = assetID => (dispatch, getState) => {
  const mapping = keyBy(getState().assetsToHeaderNavMapping, 'assetID')[assetID];
  mapping && dispatch(setCurrentHeaderNav(mapping.headerNavID));
  dispatch(setCurrentAsset(assetID));
};
