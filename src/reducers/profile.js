import {
  FETCH_ASSETS_FULFILLED,
  INCREMENT_ASSET,
  DECREMENT_ASSET
} from '../constants/assets';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ASSETS_FULFILLED:
    const data = action.payload.data.reduce((memo, asset) => ({ ...memo, [asset.id]: 0 }), {});
    return { ...state, ...data };
  case INCREMENT_ASSET:
    return { ...state, [action.payload]: state[action.payload] + 1 };
  case DECREMENT_ASSET:
    return { ...state, [action.payload]: state[action.payload] - 1 };
  default:
    return state;
  }
};

export default reducer;
