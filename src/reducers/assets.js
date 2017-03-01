import {
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR,
  SET_CURRENT_SUB_COLOR
} from '../constants/assets';
import { REHYDRATE } from 'redux-persist/constants';
import keyBy from 'lodash/keyBy';

const initialState = {
  data: null,
  current: null,
  currentColor: null,
  currentSubColor: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REHYDRATE:
    if ( ! action.payload.profile) return state;
    const profileAsset = action.payload.profile[state.current];
    if ( ! profileAsset) return state;
    let profileData = {}
    if (profileAsset && profileAsset.color) {
      profileData.currentColor = profileAsset.color;
    }
    if (profileAsset && profileAsset.subColor) {
      profileData.currentSubColor = profileAsset.subColor;
    }
    return {
      ...state,
      ...profileData
    };
  case FETCH_ASSETS_FULFILLED:
    const data = keyBy(action.payload.map(asset => ({
      ...asset,
      colors: keyBy(asset.colors.map(color => ({
        ...color,
        files: asset.required ? color.files : [null].concat(color.files),
        colors: keyBy(color.colors.map(subColor => ({
          ...subColor,
          files: asset.required ? subColor.files : [null].concat(subColor.files)
        })), 'id')
      })), 'id'),
    })), 'id');
    return {
      ...state,
      data,
      current: action.payload[0].id,
      currentColor: action.payload[0].colors[0].id
    };
  case SET_CURRENT_ASSET:
    return {
      ...state,
      current: action.payload.assetID,
      currentColor: action.payload.color,
      currentSubColor: action.payload.subColor
    };
  case SET_CURRENT_COLOR:
    return {
      ...state,
      currentColor: action.payload
    };
  case SET_CURRENT_SUB_COLOR:
    return {
      ...state,
      currentSubColor: action.payload
    };
  default:
    return state;
  }
};

export default reducer;