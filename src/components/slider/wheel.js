import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const getImage = ({ current: { asset, color, subColor }, items }, fileIndex) => {
  if ( ! items) return;
  const assetColor = items[asset].colors[color];
  const fileName = items[asset].subColors ? assetColor.colors[subColor].files[fileIndex] : assetColor.files[fileIndex];
  if ( ! fileName) return;
  return items[asset].subColors ? `/svg/${asset}/${color}/${subColor}/${fileName}` : `/svg/${asset}/${color}/${fileName}`;
};

const getNextIndex = (profile, { current: { asset, color, subColor }, items }, index) => {
  if ( ! items) return;
  const files = items[asset].subColors ? items[asset].colors[color].colors[subColor].files : items[asset].colors[color].files;
  const fileIndex = profile[asset].fileIndex;
  const length = files.length;
  return (fileIndex + 1 + index) % length;
};

const getPrevIndex = (profile, { current: { asset, color, subColor }, items }, index) => {
  if ( ! items) return;
  const files = items[asset].subColors ? items[asset].colors[color].colors[subColor].files : items[asset].colors[color].files;
  const fileIndex = profile[asset].fileIndex;
  const length = files.length;
  return (length + fileIndex - 1 - (1 - index) % 2) % length;
};

const getImg = (profile, assets, type, index) => {
  if ( ! assets.items) return;
  const fileIndex = type !== 'left' ? getNextIndex(profile, assets, index) : getPrevIndex(profile, assets, index);
  const src = getImage(assets, fileIndex);
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
