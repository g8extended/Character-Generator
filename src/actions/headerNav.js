import {
  HEADER_NAV_MOUSE_ENTER,
  HEADER_NAV_MOUSE_LEAVE
} from '../constants/headerNav';
import keyBy from 'lodash/keyBy';

let timeout;

export const headerNavMouseEnter = headerNavID => dispatch => {
  clearTimeout(timeout);
  
  dispatch({
    type: HEADER_NAV_MOUSE_ENTER,
    payload: headerNavID
  });
};

export const headerNavMouseLeave = () => dispatch => {
  timeout = setTimeout(() => {
    dispatch({
      type: HEADER_NAV_MOUSE_LEAVE
    });
  }, 333);
};
