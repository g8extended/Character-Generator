import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const getImage = ({ asset, color, subColor }, fileIndex, assets) => {
  if ( ! assets.items) return;
  const assetColor = assets.items[asset].colors[color];
  const fileName = assets.items[asset].subColors ? assetColor.colors[subColor].files[fileIndex] : assetColor.files[fileIndex];
  if ( ! fileName) return;
  return assets.items[asset].subColors ? `/svg/${asset}/${color}/${subColor}/${fileName}` : `/svg/${asset}/${color}/${fileName}`;
};

const getNextIndex = (profile, assets, index) => {
  if ( ! assets.items) return;
  const length = assets.items[assets.current.asset].colors[assets.current.color].files.length;
  return (profile[assets.current.asset].fileIndex + 1 + index) % length;
};

const getPrevIndex = (profile, assets, index) => {
  if ( ! assets.items) return;
  const length = assets.items[assets.current.asset].colors[assets.current.color].files.length;
  return (length + profile[assets.current.asset].fileIndex - 1 - (1 - index) % 2) % length;
};

const getImg = (profile, assets, type, index) => {
  if ( ! assets.items) return;
  const fileIndex = type !== 'left' ? getNextIndex(profile, assets, index) : getPrevIndex(profile, assets, index);
  const src = getImage(assets.current, fileIndex, assets);
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
