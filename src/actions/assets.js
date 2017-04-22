import {
  FETCH_ASSETS_FULFILLED,
  SET_ROUTER,
  SET_CURRENT,
  SET_CURRENT_TYPE,
  SET_CURRENT_COLOR
} from '../constants/assets';
import keyBy from 'lodash/keyBy';
import { updateProfileAsset } from './profile';
import { filterColors } from '../utils/filters';

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
  const availableType = type || profile.type || Object.keys(state.assets.items[asset].types)[0];
  const filteredColors = filterColors(state.profile, asset, state.assets.items[asset].types[availableType].colors);
  const availableColor = color || profile.color || filteredColors[0].id;

  ['Mouths', 'Eyes']
    .filter(item => asset === 'Body' && color && state.profile[item].color.indexOf(color) === -1)
    .map(asset => {
      const assetColor = state.profile[asset].color;
      return {
        asset,
        type: state.profile[asset].type,
        color: assetColor.indexOf('-') !== -1 ? assetColor.replace(/-.*$/, `-${color}`) : color
      };
    }).forEach(current => {
      dispatch(updateProfileAsset(current));
    });

  const current = {
    asset,
    type: availableType,
    color: availableColor
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
