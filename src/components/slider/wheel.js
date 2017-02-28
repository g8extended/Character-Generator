import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const getImage = (assetID, color, subColor, fileIndex, assets) => {
  if ( ! assets.data) return;
  const assetColor = assets.data[assetID].colors[color];
  const fileName = assets.data[assetID].subColors ? assetColor.colors[subColor].files[fileIndex] : assetColor.files[fileIndex];
  if ( ! fileName) return;
  return assets.data[assetID].subColors ? `/svg/${assetID}/${color}/${subColor}/${fileName}` : `/svg/${assetID}/${color}/${fileName}`;
};

const getNextIndex = (profile, assets, index) => {
  if ( ! assets.data) return;
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  return (profile[assets.current].fileIndex + 1 + index) % length;
};

const getPrevIndex = (profile, assets, index) => {
  if ( ! assets.data) return;
  const length = assets.data[assets.current].colors[assets.currentColor].files.length;
  return (length + profile[assets.current].fileIndex - 1 - (1 - index) % 2) % length;
};

const getImg = (profile, assets, type, index) => {
  if ( ! assets.data) return;
  const fileIndex = type !== 'left' ? getNextIndex(profile, assets, index) : getPrevIndex(profile, assets, index);
  const src = getImage(assets.current, assets.currentColor, assets.currentSubColor, fileIndex, assets);
  return src ? <img src={src} /> : null;
};

const Wheel = (
  ({ assets, profile, type }) => {

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
