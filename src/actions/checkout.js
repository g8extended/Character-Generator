import {
  SHOW_FORM,
  SET_EMAIL,
  SUBMIT_FORM,
  CHECK_PAYMENT,
  CHECK_PAYMENT_FULFILLED
} from '../constants/checkout';
import axios from 'axios';

export const showForm = () => dispatch => {
  dispatch({
    type: SHOW_FORM
  });
};

export const setEmail = email => dispatch => {
  dispatch({
    type: SET_EMAIL,
    payload: email
  });
};

export const submitForm = () => dispatch => {
  dispatch({
    type: SUBMIT_FORM
  });

  window.location.href = 'https://gumroad.com/l/vHTIL';
};

export const checkPayment = () => (dispatch, getState) => {
  const { checkout } = getState();
  const { email, submitted } = checkout;

  if ( ! submitted || ! email) return;

  dispatch({
    type: CHECK_PAYMENT
  });

  axios.post('/api/checkout', {
    email
  }).then(data => dispatch({
    type: CHECK_PAYMENT_FULFILLED
  }));
};
