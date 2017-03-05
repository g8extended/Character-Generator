import {
  FETCH_ASSETS_FULFILLED
} from '../constants/assets';
import {
  UPDATE_PROFILE_ASSET,
  UPDATE_PROFILE_ASSET_TYPE,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY
} from '../constants/profile';
import assetsConfig from '../configs/assets';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS_FULFILLED:
    const data = action.payload.reduce((memo, asset) => ({
      ...memo,
      [asset.id]: {
        type: asset.items[0].id,
        color: asset.items[0].items[0].id,
        fileIndex: 0,
        visible: assetsConfig[asset.id].required
      }
    }), {});
    return { ...state, ...data };
  case UPDATE_PROFILE_ASSET:
    return {
      ...state,
      [action.asset]: action.payload
    };
  case UPDATE_PROFILE_ASSET_TYPE:
    return {
      ...state,
      [action.asset]: {
        ...state[action.asset],
        type: action.payload.type
      }
    };
  case UPDATE_PROFILE_ASSET_COLOR:
    return {
      ...state,
      [action.asset]: {
        ...state[action.asset],
        color: action.payload.color
      }
    };
  case UPDATE_PROFILE_ASSET_VISIBILITY:
    return {
      ...state,
      [action.asset]: {
        ...state[action.asset],
        visible: action.payload.visible
      }
    };
  default:
    return state;
  }
};

export default reducer;
