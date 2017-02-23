import {
  SET_HEADER_NAV
} from '../constants/headerNav';
import { setCurrentAsset } from '../actions/assets';
import keyBy from 'lodash/keyBy';

export const setCurrentHeaderNav = headerNavID => dispatch => {
  dispatch({
    type: SET_HEADER_NAV,
    payload: headerNavID
  });
};

export const headerNavClick = headerNavID => (dispatch, getState) => {
  const mapping = keyBy(getState().assetsToHeaderNavMapping, 'headerNavID')[headerNavID];
  mapping && dispatch(setCurrentAsset(mapping.assetID));
  dispatch(setCurrentHeaderNav(headerNavID));
};
