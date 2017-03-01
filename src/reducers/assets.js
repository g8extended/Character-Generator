import {
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR,
  SET_CURRENT_SUB_COLOR
} from '../constants/assets';
import { REHYDRATE } from 'redux-persist/constants';
import keyBy from 'lodash/keyBy';

const initialState = {
  items: {},
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
    const profileAsset = action.payload.profile[state.current.asset];
    if ( ! profileAsset) return state;
    let current = {}
    if (profileAsset && profileAsset.color) {
      current.color = profileAsset.color;
    }
    if (profileAsset && profileAsset.subColor) {
      current.subColor = profileAsset.subColor;
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
      colors: keyBy(asset.colors.map(color => ({
        ...color,
        colors: keyBy(color.colors.map(subColor => ({
          ...subColor
        })), 'id')
      })), 'id'),
    })), 'id');
    return {
      ...state,
      items,
      current: {
        ...state.current,
        asset: action.payload[0].id,
        color: action.payload[0].colors[0].id
      }
    };
  case SET_CURRENT_ASSET:
    return {
      ...state,
      current: {
        asset: action.payload.asset,
        color: action.payload.color,
        subColor: action.payload.subColor
      }
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