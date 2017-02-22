import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const getImage = (assetID, color, fileIndex, assets) => {
  const fileName = assets.data[assetID].colors[color].files[fileIndex];
  return `svg/${assetID}/${color}/${fileName}`;
};

const getNextIndex = (profile, assets, index) => {
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  return (profile[assets.current].fileIndex + 1 + index) % length;
};

const getPrevIndex = (profile, assets, index) => {
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  return (length + profile[assets.current].fileIndex - 1 - (1 - index) % 2) % length;
};

const getImg = (profile, assets, type, index) => {
  if ( ! assets.data[assets.current]) return;
  const fileIndex = type !== 'left' ? getNextIndex(profile, assets, index) : getPrevIndex(profile, assets, index);
  return <img src={getImage(assets.current, assets.currentColor, fileIndex, assets)} />
};

const Wheel = (
  ({ dispatch, assets, profile, type }) => {

    const classes = classNames('wheel', 
      { left:  type === 'left' },
      { right: type === 'right'}
    );

    return  (
      <div className={classes} >
        <div className="character">
          <div className="grad"></div>
          {getImg(profile, assets, type, 0)}
        </div>
        <div className="character">
          <div className="grad"></div>
          {getImg(profile, assets, type, 1)}
        </div>
      </div>
    )
  }
);

const mapStateToProps = state => ({
  assets: state.assets,
  profile: state.profile
});

export default connect(mapStateToProps)(Wheel);
