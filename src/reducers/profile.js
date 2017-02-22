import {
  FETCH_ASSETS_FULFILLED
} from '../constants/assets';
import {
  UPDATE_PROFILE_ASSET_FILE_INDEX
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
  case UPDATE_PROFILE_ASSET_FILE_INDEX:
    return {
      ...state,
      [action.payload.assetID]: {
        ...state[action.payload.assetID],
        fileIndex: action.payload.fileIndex
      }
    };
  default:
    return state;
  }
};

export default reducer;
