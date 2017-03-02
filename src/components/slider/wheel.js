import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const getNextIndex = (length, index, offset) => {
  return (index + 1 + offset) % length;
};

const getPrevIndex = (length, index, offset) => {
  return (length + index - 1 - (1 - offset) % 2) % length;
};

const getFiles = ({ current: {asset, color, subColor}, items }) => {
  return items[asset].subColors ? items[asset].colors[color].colors[subColor].files : items[asset].colors[color].files;
};

const getFilePath = ({ current: { asset, color, subColor }, items }) => {
  return items[asset].subColors ? `/svg/${asset}/${color}/${subColor}/` : `/svg/${asset}/${color}/`;
};

const getImg = (filePath, files, fileIndex, getIndexFn, offset) => {
  const src = filePath + files[getIndexFn(files.length, fileIndex, offset)];
  return src ? <img src={src} /> : null;
};

const Wheel = (
  ({ assets, profile, type }) => {

    if ( ! assets.items) return <div />;

    const classes = classNames('wheel', 
      { left:  type === 'left' },
      { right: type === 'right'}
    );

    const getIndexFn = type !== 'left' ? getNextIndex : getPrevIndex;
    const files = getFiles(assets);
    const filePath = getFilePath(assets);
    const fileIndex = profile[assets.current.asset].fileIndex;

    return (
      <div className={classes} >
        <div className="character">
          <div className="grad"></div>
          {getImg(filePath, files, fileIndex, getIndexFn, 0)}
        </div>
        <div className="character">
          <div className="grad"></div>
          {getImg(filePath, files, fileIndex, getIndexFn, 1)}
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
