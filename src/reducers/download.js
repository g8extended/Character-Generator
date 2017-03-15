import {
  UPDATE
} from '../constants/download';

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE:
    return action.payload;
  default:
    return state;
  }
};

export default reducer;
