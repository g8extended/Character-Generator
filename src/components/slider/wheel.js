import React, { Component } from 'react';
import { connect } from 'react-redux';

const getNextIndex = (profile, assets, index) => {
  const length = assets.data[assets.current].files.length;
  return (profile[assets.current] + 1 + index) % length;
};

const getPrevIndex = (profile, assets, index) => {
  const length = assets.data[assets.current].files.length;
  return (length + profile[assets.current] - 1 - (1 - index) % 2) % length;
};

const getImg = (profile, assets, type, index) => {
  if ( ! assets.data[assets.current]) return;
  const fileIndex = type !== 'left' ? getNextIndex(profile, assets, index) : getPrevIndex(profile, assets, index);
  return <img src={`svg/${assets.current}/${assets.data[assets.current].files[fileIndex]}`} />
};

const Wheel = (
  ({ dispatch, assets, profile, type }) => (
    <div className="wheel">
      <div className="character">
        {getImg(profile, assets, type, 0)}
      </div>
      <div className="character">
        {getImg(profile, assets, type, 1)}
      </div>
    </div>
  )
);

const mapStateToProps = state => ({
  assets: state.assets,
  profile: state.profile
});

export default connect(mapStateToProps)(Wheel);
