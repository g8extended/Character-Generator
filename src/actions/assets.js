import {
  FETCH_ASSETS_FULFILLED,
  SET_ROUTER,
  SET_CURRENT,
  SET_CURRENT_COLOR,
  SET_CURRENT_SUB_COLOR
} from '../constants/assets';
import { setCurrentHeaderNav } from '../actions/headerNav';
import keyBy from 'lodash/keyBy';

export const fetchAssetsFulfilled = items => dispatch => {
  dispatch({
    type: FETCH_ASSETS_FULFILLED,
    payload: items
  });
};

export const setRouter = (asset, color, subColor) => dispatch => {
  dispatch({
    type: SET_ROUTER,
    payload: {
      asset,
      color,
      subColor
    }
  });
  dispatch(setCurrent(asset, color, subColor));
};

export const setCurrent = (asset, color, subColor) => (dispatch, getState) => {
  const state = getState();
  const profile = state.profile[asset];
  const profileColor = profile && profile.color ? profile.color : state.assets.items[asset].colors[0];
  const profileSubColor = profile && profile.subColor ? profile.subColor : state.assets.items[asset].colors[profileColor].colors[0];
  dispatch({
    type: SET_CURRENT,
    payload: {
      asset,
      color: color || profileColor,
      subColor: subColor || profileSubColor
    }
  });
};

export const setCurrentColor = color => dispatch => {
  if ( ! color) return;
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: color
  });
};

export const setCurrentSubColor = color => dispatch => {
  if ( ! color) return;
  dispatch({
    type: SET_CURRENT_SUB_COLOR,
    payload: color
  });
};
