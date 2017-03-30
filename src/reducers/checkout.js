import {
  SHOW_FORM,
  HIDE_FORM,
  SET_EMAIL
} from '../constants/checkout';

const initialState = {
  formVisible: false,
  email: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_FORM:
    return {
      ...state,
      formVisible: true
    };
  case HIDE_FORM:
    return {
      ...state,
      formVisible: false
    };
  case SET_EMAIL:
    return {
      ...state,
      email: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
