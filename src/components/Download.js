import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapValues from 'lodash/mapValues';
import filter from 'lodash/filter';
import omit from 'lodash/omit';
import { sendProfile } from '../actions/profile';

const onClick = (dispatch, profile, assets) => () => {
  const visibleProfile = filter(mapValues(profile, (item, asset) => ({
    ...item,
    asset
  })), item => item.visible).map(item => omit(item, 'visible'));
  dispatch(sendProfile(visibleProfile));
};

const Download = ({ dispatch, profile, assets }) => (
  <button className="download" onClick={onClick(dispatch, profile, assets)}>
    Download
  </button>
);

export default connect(({ profile, assets }) => ({ profile, assets }))(Download);
