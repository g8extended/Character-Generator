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
  dispatch(setCurrentAsset(keyBy(getState().assetsToHeaderNavMapping, 'headerNavID')[headerNavID].assetID));
  dispatch(setCurrentHeaderNav(headerNavID));
};
