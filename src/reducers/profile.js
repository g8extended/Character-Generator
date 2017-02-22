import {
  FETCH_ASSETS_FULFILLED,
  SET_ASSET_INDEX,
} from '../constants/assets';

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
  case SET_ASSET_INDEX:
    return { ...state, [action.key]: action.payload };
  default:
    return state;
  }
};

export default reducer;
