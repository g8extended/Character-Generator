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
        asset: asset.id,
        type: asset.items[0].id,
        color: asset.items[0].items[0].id,
        index: 0,
        visible: assetsConfig[asset.id].required
      }
    }), {});
    return { ...state, ...data };
  case UPDATE_PROFILE_ASSET:
  case UPDATE_PROFILE_ASSET_TYPE:
  case UPDATE_PROFILE_ASSET_COLOR:
  case UPDATE_PROFILE_ASSET_VISIBILITY:
    return {
      ...state,
      [action.asset]: {
        ...state[action.asset],
        ...action.payload
      }
    };
  default:
    return state;
  }
};

export default reducer;
