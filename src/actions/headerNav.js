import {
  HEADER_NAV_CLICK
} from '../constants/headerNav';
import {
  SET_CURRENT_ASSET
} from '../constants/assets';
import { setCurrentAsset } from '../actions/assets';
import keyBy from 'lodash/keyBy';

export const headerNavClick = headerNavID => (dispatch, getState) => {
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: keyBy(getState().assetsToHeaderNavMapping, 'headerNavID')[headerNavID].assetID
  });
  dispatch({
    type: HEADER_NAV_CLICK,
    payload: headerNavID
  });
};
