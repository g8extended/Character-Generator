import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR
} from '../constants/assets';
import keyBy from 'lodash/keyBy';

const initialState = {
  isLoading: false,
  data: null,
  current: null,
  currentColor: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS:
    return { ...state, isLoading: true };
  case FETCH_ASSETS_FULFILLED:
    const data = keyBy(action.payload.data.map(folder => ({
      ...folder,
      colors: keyBy(folder.colors.map(color => ({
        ...color,
        files: [null].concat(color.files)
      })), 'id'),
    })), 'id');
    return {
      ...state,
      data,
      isLoading: false,
      current: action.payload.data[0].id,
      currentColor: action.payload.data[0].colors[0].id
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