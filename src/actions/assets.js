import {
  FETCH_ASSETS_FULFILLED,
  SET_CURRENT_ASSET,
  SET_CURRENT_COLOR
} from '../constants/assets';
import { setCurrentHeaderNav } from '../actions/headerNav';
import keyBy from 'lodash/keyBy';

export const fetchAssetsFulfilled = data => dispatch => {
  dispatch({
    type: FETCH_ASSETS_FULFILLED,
    payload: data
  });
  dispatch(setCurrentAssetAndColor(data[0].id, data[0].colors[0].id));
};

export const setCurrentAssetAndColor = (assetID, color) => dispatch => {
  assetID && dispatch(setCurrentAsset(assetID));
  color && dispatch(setCurrentColor(color));
};

export const setCurrentAsset = assetID => (dispatch, getState) => {
  const state = getState();
  const profileAsset = state.profile[assetID];
  const color = profileAsset ? profileAsset.color : state.assets.data[assetID].colors[0];
  dispatch({
    type: SET_CURRENT_ASSET,
    payload: {
      assetID,
      color: color
    }
  });
};

export const setCurrentColor = color => dispatch => {
  dispatch({
    type: SET_CURRENT_COLOR,
    payload: color
  });
};
