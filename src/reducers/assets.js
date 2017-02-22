import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR
} from '../constants/assets';
import keyBy from 'lodash/keyBy';

const initialState = {
  isLoading: false,
  data: {},
  current: 'Hairstyles',
  colors: [{ id: 0, title: 'black'}, { id: 1, title: 'brown'}, { id: 2, title: 'yellow'}, { id: 3, title: 'grey'}],
  currentColor: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS:
    return { ...state, isLoading: true };
  case FETCH_ASSETS_FULFILLED:
    return { ...state, isLoading: false, data: keyBy(action.payload.data, 'id') };
  case SET_CURRENT_ASSET:
    return { ...state, current: action.payload };
  case SET_CURRENT_COLOR:
    return { ...state, currentColor: action.payload };
  default:
    return state;
  }
};

export default reducer;