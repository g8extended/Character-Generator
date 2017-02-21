import {
  HEADER_NAV_CLICK
} from '../constants/headerNav';

export const headerNavClick = index => dispatch => {
  dispatch({
    type: HEADER_NAV_CLICK,
    payload: index
  });
};
