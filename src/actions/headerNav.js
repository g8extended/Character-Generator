import {
  HEADER_NAV_MOUSE_ENTER,
  HEADER_NAV_MOUSE_LEAVE,
  SET_HEADER_NAV
} from '../constants/headerNav';
import { setCurrentAsset } from '../actions/assets';
import keyBy from 'lodash/keyBy';

let timeout;

export const setCurrentHeaderNav = headerNavID => dispatch => {
  dispatch({
    type: SET_HEADER_NAV,
    payload: headerNavID
  });
};

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

export const headerNavClick = headerNavID => (dispatch, getState) => {
  const mapping = keyBy(getState().assetsToHeaderNavMapping, 'headerNavID')[headerNavID];
  mapping && dispatch(setCurrentAsset(mapping.assetID));
  dispatch(setCurrentHeaderNav(headerNavID));
  dispatch(headerNavMouseLeave());
};
