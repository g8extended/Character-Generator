import {
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR,
  SET_CURRENT_SUB_COLOR
} from '../constants/assets';
import { setCurrentHeaderNav } from '../actions/headerNav';
import keyBy from 'lodash/keyBy';

export const fetchAssetsFulfilled = data => dispatch => {
  dispatch({
    type: FETCH_ASSETS_FULFILLED,
    payload: data
  });
  dispatch(setCurrentAssetAndColor(data[0].id, data[0].colors[0].id));
};

export const setCurrentAssetAndColor = (asset, color, subColor) => dispatch => {
  asset && dispatch(setCurrentAsset(asset));
  color && dispatch(setCurrentColor(color));
  subColor && dispatch(setCurrentSubColor(subColor));
};

export const setCurrentAsset = asset => (dispatch, getState) => {
  const state = getState();
  const profileAsset = state.profile[asset];
  const color = profileAsset ? profileAsset.color : state.assets.items[asset].colors[0];
  const subColor = profileAsset ? profileAsset.subColor : state.assets.items[asset].colors[color].colors[0];
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: {
      asset,
      color,
      subColor
    }
  });
};

export const setCurrentColor = color => dispatch => {
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: color
  });
};

export const setCurrentSubColor = color => dispatch => {
  dispatch({
    type: SET_CURRENT_SUB_COLOR,
    payload: color
  });
};
