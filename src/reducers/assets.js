import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET
} from '../constants/assets';
import keyBy from 'lodash/keyBy';

const initialState = {
  isLoading: false,
  data: {},
  current: 'Hairstyles'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS:
    return { ...state, isLoading: true };
  case FETCH_ASSETS_FULFILLED:
    return { ...state, isLoading: false, data: keyBy(action.payload.data, 'id') };
  case SET_CURRENT_ASSET:
    return { ...state, current: action.payload };
  default:
    return state;
  }
};

export default reducer;
