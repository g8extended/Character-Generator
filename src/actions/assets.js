import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  INCREMENT_ASSET,
  DECREMENT_ASSET
} from '../constants/assets';
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

export const setCurrentAsset = id => dispatch => {
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: id
  });    
};

export const incAsset = () => (dispatch, getState) => {
  dispatch({
    type: INCREMENT_ASSET,
    payload: getState().assets.current
  });    
};

export const decAsset = () => (dispatch, getState) => {
  dispatch({
    type: DECREMENT_ASSET,
    payload: getState().assets.current
  });    
};
