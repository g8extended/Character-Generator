import {
  UPDATE_PROFILE_ASSET,
  UPDATE_PROFILE_ASSET_TYPE,
  UPDATE_PROFILE_ASSET_COLOR,
  UPDATE_PROFILE_ASSET_VISIBILITY,
  UPDATE_PROFILE_ASSET_TRANSITION_CLASSNAME,
  CHANGE_PROFILE_ASSET_TYPE_STYLE,
  CHANGE_PROFILE_ASSET_SORT_ORDER
} from '../constants/profile';
import mapValues from 'lodash/mapValues';
import filter from 'lodash/filter';
import omit from 'lodash/omit';
import axios from 'axios';
import assetsConfig from '../configs/assets';

const updateProfileAssetImmediately = ({ asset, type, color }) => (dispatch, getState) => {
  const replace = assetsConfig[asset].replace;

  if (replace) {
    const { profile } = getState();
    replace.map(replacedAsset => {
      if ( ! profile[replacedAsset].visible) return;
        dispatch({
          type: UPDATE_PROFILE_ASSET_VISIBILITY,
          asset: replacedAsset,
          payload: {
            visible: false
          }
        });
    });
  }

  dispatch({
    type: UPDATE_PROFILE_ASSET,
    asset,
    payload: {
      type: type,
      color: color,
      visible: true
    }
  })
};

export const updateProfileAsset = ({ asset, type, color, transitionClassName }) => dispatch => {
  if ( ! transitionClassName) {
    dispatch(updateProfileAssetImmediately({ asset, type, color }))
    return;
  }

  dispatch(updateProfileAssetTransitionClassName(asset, transitionClassName));
  setTimeout(() => {
    dispatch(updateProfileAssetTransitionClassName(asset, ''));
    dispatch(updateProfileAssetImmediately({ asset, type, color }))
  }, 150)
};

export const updateProfileAssetType = type => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_TYPE,
    asset: getState().assets.current.asset,
    payload: {
      type
    }
  });
};

export const updateProfileAssetColor = color => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_COLOR,
    asset: getState().assets.current.asset,
    payload: {
      color
    }
  });
};

export const toggleProfileAssetVisible = () => (dispatch, getState) => {
  const { assets, profile } = getState();
  dispatch({
    type: UPDATE_PROFILE_ASSET_VISIBILITY,
    asset: assets.current.asset,
    payload: {
      visible: ! profile[assets.current.asset].visible
    }
  });
};

export const updateProfileAssetTransitionClassName = (asset, transitionClassName) => dispatch => {
  dispatch({
    type: UPDATE_PROFILE_ASSET_TRANSITION_CLASSNAME,
    asset,
    payload: transitionClassName
  })
};

export const changeProfileAssetTypeStyle = (which, shift) => (dispatch, getState) => {
  const { assets: { items, current: { asset } }, profile } = getState();
  const { type, color } = profile[asset];
  const { left, top } = items[asset].types[type].colors[color].files[0].style;
  const k = shift ? 10 : 1;
  const payload = {
    left: which % 2 ? left - (2 - which % 4) * k : left,
    top: which % 2 ? top : top + (1 - which % 4) * k
  };
  dispatch({
    type: CHANGE_PROFILE_ASSET_TYPE_STYLE,
    current: {
      asset,
      type,
    },
    payload
  });
};

export const changeProfileAssetTypeSortOrder = (which, shift) => (dispatch, getState) => {
  const { assets: { items, current: { asset } }, profile } = getState();
  const { sortOrder } = items[asset];
  const k = shift ? 10 : 1;
  const payload = which % 2 ? sortOrder : sortOrder - (1 - which % 4) * k;
  dispatch({
    type: CHANGE_PROFILE_ASSET_SORT_ORDER,
    asset,
    payload
  });
};

export const downloadProfile = () => (dispatch, getState) => {
  const { profile } = getState();
  const visibleProfile = filter(mapValues(profile, (item, asset) => ({
    ...item,
    asset
  })), item => item.visible).map(item => omit(item, 'visible'));

  axios.post('/api/profile', {
    profile: btoa(JSON.stringify(visibleProfile))
  }).then(data => window.location.assign(`${data.data.url}`));
};
