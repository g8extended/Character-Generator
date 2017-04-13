import {
  SHOW_FORM,
  HIDE_FORM,
  SET_EMAIL,
  SET_DOWNLOAD_URL
} from '../constants/checkout';
import axios from 'axios';

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

export const checkPayment = sale => (dispatch, getState) => {
  axios.post('/api/check', {
    sale_id: sale
  }).then(data => {
    dispatch({
      type: SET_DOWNLOAD_URL,
      payload: data.data.download_url
    });
  });
};
