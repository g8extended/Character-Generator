import {
  FETCH_ASSETS_FULFILLED
} from '../constants/assets';
import {
  UPDATE_PROFILE_ASSET_FILE_INDEX,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_SUB_COLOR
} from '../constants/profile';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS_FULFILLED:
    const data = action.payload.reduce((memo, asset) => ({
      ...memo,
      [asset.id]: {
        color: asset.colors[0].id,
        subColor: asset.subColors ? asset.colors[0].colors[0].id : null,
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
  case UPDATE_PROFILE_ASSET_COLOR:
    return {
      ...state,
      [action.payload.assetID]: {
        ...state[action.payload.assetID],
        color: action.payload.color
      }
    };
  case UPDATE_PROFILE_ASSET_SUB_COLOR:
    return {
      ...state,
      [action.payload.assetID]: {
        ...state[action.payload.assetID],
        subColor: action.payload.subColor
      }
    };
  default:
    return state;
  }
};

export default reducer;
