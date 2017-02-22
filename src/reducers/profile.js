import {
  FETCH_ASSETS_FULFILLED
} from '../constants/assets';
import {
  UPDATE_PROFILE_ASSET
} from '../constants/profile';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS_FULFILLED:
    const data = action.payload.data.reduce((memo, asset) => ({
      ...memo,
      [asset.id]: {
        color: 'default',
        fileIndex: 0
      }
    }), {});
    return { ...state, ...data };
  case UPDATE_PROFILE_ASSET:
    return {
      ...state,
      [action.payload.assetID]: {
        color: action.payload.color,
        fileIndex: action.payload.fileIndex
      }
    };
  default:
    return state;
  }
};

export default reducer;
