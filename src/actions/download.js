import {
  UPDATE
} from '../constants/download';

export const update = url => dispatch => {
  dispatch({
    type: UPDATE,
    payload: url
  });
};
