import {
  FETCH_ASSETS_FULFILLED,
  SET_ROUTER,
  SET_CURRENT,
  SET_CURRENT_TYPE,
  SET_CURRENT_COLOR
} from '../constants/assets';
import { REHYDRATE } from 'redux-persist/constants';
import keyBy from 'lodash/keyBy';
import assetsConfig from '../configs/assets';

const mergeStyle = style => file => {
  return {
    ...file,
    style: {
      ...file.style,
      ...style
    }
  }
};

const initialState = {
  items: {},
  router: {
    asset: null,
    type: null,
    color: null
  },
  current: {
    asset: null,
    type: null,
    color: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REHYDRATE:
    if ( ! action.payload.profile) return state;
    const profile = action.payload.profile[state.current.asset];
    if ( ! profile) return state;
    let current = {}
    if (profile && profile.type) {
      current.type = profile.type;
    }
    if (profile && profile.color) {
      current.color = profile.color;
    }
    if (state.router.asset === state.current.asset) {
      current.type = state.router.type || current.type;
      current.color = state.router.color || current.color;
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
      types: keyBy(asset.items.map(type => ({
        ...type,
        colors: keyBy(type.items.map(color => ({
          id: color.id,
          files: color.items.map(mergeStyle(assetsConfig[asset.id].style))
        })), 'id')
      })), 'id')
    })), 'id');
    return {
      items,
      current: {
        ...state.current,
        asset: action.payload[0].id,
        type: action.payload[0].items[0].id,
        color: action.payload[0].items[0].items[0].id
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
  case SET_CURRENT_TYPE:
    return {
      ...state,
      current: {
        ...state.current,
        type: action.payload
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
  default:
    return state;
  }
};

export default reducer;
