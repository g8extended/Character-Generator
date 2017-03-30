import {
  SHOW_FORM,
  HIDE_FORM,
  SET_EMAIL
} from '../constants/checkout';

export const showForm = () => dispatch => {
  dispatch({
    type: SHOW_FORM
  });
};

export const hideForm = () => dispatch => {
  dispatch({
    type: HIDE_FORM
  });
};

export const setEmail = email => dispatch => {
  dispatch({
    type: SET_EMAIL,
    payload: email
  });
};
