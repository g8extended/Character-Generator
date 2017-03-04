import {
  FETCH_ASSETS_FULFILLED,
  SET_ROUTER,
  SET_CURRENT,
  SET_CURRENT_COLOR,
  SET_CURRENT_SUB_COLOR
} from '../constants/assets';
import { REHYDRATE } from 'redux-persist/constants';
import keyBy from 'lodash/keyBy';
import assetsConfig from '../configs/assets';

const initialState = {
  items: {},
  router: {
    asset: null,
    color: null,
    subColor: null
  },
  current: {
    asset: null,
    color: null,
    subColor: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REHYDRATE:
    if ( ! action.payload.profile) return state;
    const profile = action.payload.profile[state.current.asset];
    if ( ! profile) return state;
    let current = {}
    if (profile && profile.color) {
      current.color = profile.color;
    }
    if (profile && profile.subColor) {
      current.subColor = profile.subColor;
    }
    if (state.router.asset === state.current.asset) {
      current.color = state.router.color || current.color;
      current.subColor = state.router.subColor || current.subColor;
    }
    return {
      ...state,
      current: {
        ...state.current,
        ...current
      }
    };
  case FETCH_ASSETS_FULFILLED:
    const items = keyBy(action.payload.map(asset => ({
      ...asset,
      ...assetsConfig[asset.id],
      colors: keyBy(asset.colors.map(color => ({
        ...color,
        files: color.colors[0].isFile ? color.colors : [],
        colors: color.colors[0].isFile ? [] : keyBy(color.colors.map(subColor => ({
          id: subColor.id,
          files: subColor.colors
        })), 'id')
      })), 'id')
    })), 'id');
    return {
      items,
      current: {
        ...state.current,
        asset: action.payload[0].id,
        color: action.payload[0].colors[0].id
      }
    };
  case SET_ROUTER:
    return {
      ...state,
      router: action.payload
    };
  case SET_CURRENT:
    return {
      ...state,
      current: action.payload
    };
  case SET_CURRENT_COLOR:
    return {
      ...state,
      current: {
        ...state.current,
        color: action.payload
      }
    };
  case SET_CURRENT_SUB_COLOR:
    return {
      ...state,
      current: {
        ...state.current,
        subColor: action.payload
      }
    };
  default:
    return state;
  }
};

export default reducer;
