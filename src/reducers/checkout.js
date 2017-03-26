import {
  SHOW_FORM,
  HIDE_FORM,
  SET_EMAIL,
  SUBMIT_FORM,
  CHECK_PAYMENT,
  CHECK_PAYMENT_FULFILLED
} from '../constants/checkout';

const initialState = {
  formVisible: false,
  email: null,
  submitted: false,
  loading: false,
  paid: false
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
  case SUBMIT_FORM:
    return {
      ...state,
      formVisible: false,
      submitted: true
    };
  case CHECK_PAYMENT:
    return {
      ...state,
      loading: true
    };
  case CHECK_PAYMENT_FULFILLED:
    return {
      ...state,
      loading: false,
      paid: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
