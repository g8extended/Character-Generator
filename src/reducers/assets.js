import {
  FETCH_ASSETS_FULFILLED,
  SET_ROUTER,
  SET_CURRENT,
  SET_CURRENT_TYPE,
  SET_CURRENT_COLOR
} from '../constants/assets';
import { REHYDRATE } from 'redux-persist/constants';
import {
  CHANGE_PROFILE_ASSET_TYPE_STYLE,
  CHANGE_PROFILE_ASSET_SORT_ORDER
} from '../constants/profile';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import assetsConfig from '../configs/assets';

const mergeStyle = style => file => {
  return {
    ...file,
    style: {
      ...file.style,
      ...(style || { left: 0, top: 0 })
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
          files: color.items.map(mergeStyle(assetsConfig[asset.id].styles[type.id]))
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
  case CHANGE_PROFILE_ASSET_TYPE_STYLE:
    return {
      ...state,
      items: {
        ...state.items,
        [action.current.asset]: {
          ...state.items[action.current.asset],
          types: {
            ...state.items[action.current.asset].types,
            [action.current.type]: {
              ...state.items[action.current.asset].types[action.current.type],
              colors: keyBy(map(state.items[action.current.asset].types[action.current.type].colors, color => ({
                ...color,
                files: color.files.map(mergeStyle(action.payload))
              })), 'id')
            }
          }
        }
      }
    };
  case CHANGE_PROFILE_ASSET_SORT_ORDER:
    return {
      ...state,
      items: {
        ...state.items,
        [action.asset]: {
          ...state.items[action.asset],
          sortOrder: action.payload
        }
      }
    };
  default:
    return state;
  }
};

export default reducer;
