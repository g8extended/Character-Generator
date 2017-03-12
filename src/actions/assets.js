import {
  FETCH_ASSETS_FULFILLED,
  SET_ROUTER,
  SET_CURRENT,
  SET_CURRENT_TYPE,
  SET_CURRENT_COLOR
} from '../constants/assets';
import keyBy from 'lodash/keyBy';
import { updateProfileAsset } from './profile';

export const fetchAssetsFulfilled = items => dispatch => {
  dispatch({
    type: FETCH_ASSETS_FULFILLED,
    payload: items
  });
};

export const setRouter = (asset, type, color) => dispatch => {
  dispatch({
    type: SET_ROUTER,
    payload: {
      asset,
      type,
      color
    }
  });
  dispatch(setCurrent(asset, type, color));
};

export const setCurrent = (asset, type, color) => (dispatch, getState) => {
  const state = getState();
  const profile = state.profile[asset];
  const current = {
    asset,
    type: type || profile.type || Object.keys(state.assets.items[asset].types)[0],
    color: color || profile.color || Object.keys(state.assets.items[asset].types[current.type].colors)[0]
  };
  dispatch({
    type: SET_CURRENT,
    payload: current
  });
  dispatch(updateProfileAsset(current));
};

export const setCurrentType = type => dispatch => {
  if ( ! type) return;
  dispatch({
    type: SET_CURRENT_TYPE,
    payload: type
  });
};

export const setCurrentColor = color => dispatch => {
  if ( ! color) return;
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: color
  });
};
