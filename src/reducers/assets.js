import {
  FETCH_ASSETS,
  FETCH_ASSETS_FULFILLED
} from '../constants/assets';

const initialState = {
  isLoading: false,
  data: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS:
    return { ...state, isLoading: true };
  case FETCH_ASSETS_FULFILLED:
    return { ...state, data: action.payload.data };
  default:
    return state;
  }
};

export default reducer;
