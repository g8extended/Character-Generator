import {
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR
} from '../constants/assets';
import keyBy from 'lodash/keyBy';

const initialState = {
  data: null,
  current: null,
  currentColor: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS_FULFILLED:
    const data = keyBy(action.payload.map(folder => ({
      ...folder,
      colors: keyBy(folder.colors.map(color => ({
        ...color,
        files: folder.required ? color.files : [null].concat(color.files)
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
      currentColor: action.payload.color
    };
  case SET_CURRENT_COLOR:
    return { ...state, currentColor: action.payload };
  default:
    return state;
  }
};

export default reducer;