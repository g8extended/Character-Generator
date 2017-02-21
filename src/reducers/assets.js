import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED
} from '../constants/assets';
import keyBy from 'lodash/keyBy';

const initialState = {
  isLoading: false,
  data: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS:
    return { ...state, isLoading: true };
  case FETCH_ASSETS_FULFILLED:
    return { ...state, data: keyBy(action.payload.data, 'id') };
  default:
    return state;
  }
};

export default reducer;
