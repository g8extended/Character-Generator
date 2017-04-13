import {
  SHOW_FORM,
  HIDE_FORM,
  SET_EMAIL,
  SET_DOWNLOAD_URL
} from '../constants/checkout';

const initialState = {
  formVisible: false,
  email: null,
  downloadUrl: null
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
  case SET_DOWNLOAD_URL:
    return {
      ...state,
      downloadUrl: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
