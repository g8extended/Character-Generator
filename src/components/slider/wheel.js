import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateProfileAssetFileIndex } from '../../actions/profile';
import { isConflicts } from '../../utils/conflicts';
import map from 'lodash/map';

const getIndexByOffset = (length, index, offset) => {
  return (length + index + offset) % length;
};

const getFiles = ({ current: { asset, type, color }, items }) => {
  const colorFiles = map(items[asset].types[type].colors[color].files, file => ({
    ...file,
    src: `/svg/${asset}/${type}/${color}/${file.id}`
  }));

  if (colorFiles.length < 2) {
    const typeFiles = map(items[asset].types, type => ({
      ...type.colors[color].files[0],
      src: `/svg/${asset}/${type.id}/${color}/${type.colors[color].files[0].id}`
    }));

    return typeFiles;
  }

  return colorFiles;
};

const convert = base => value => value / base * 100 + '%';
const width = value => convert(739.6)(value);
const height = value => convert(909.9)(value);

const getImg = (files, fileIndex, offset, style, onClick) => {
  const file = files[getIndexByOffset(files.length, fileIndex, offset)];
  const img = {
    src: file.src,
    style: {
      width: width(file.style.width),
      height: height(file.style.height),
      left: width(style.left),
      top: height(style.top)
    }
  };
  return file ? <img {...img} onClick={onClick} /> : null;
};

const Wheel = (
  ({ dispatch, assets, profile, type }) => {

    if ( ! assets.items) return <div />;

    const conflict = isConflicts(assets, profile);

    const classeName = classNames('wheel', {
      left:  type === 'left',
      right: type === 'right',
      disabled: conflict
    });

    const files = getFiles(assets);
    const fileIndex = profile[assets.current.asset].fileIndex;
    const offsets = type === 'left' ? [-2, -1] : [1, 2];

    const assetItem = assets.items[assets.current.asset];

    return (
      <div className={classeName}>
        {offsets.map((offset, index) => (
          <div key={index} className="character">
            {getImg(files, fileIndex, offset, assetItem.style, () => conflict || dispatch(updateProfileAssetFileIndex(offset)))}
          </div>
        ))}
      </div>
    )
  }
);

const mapStateToProps = state => ({
  assets: state.assets,
  profile: state.profile
});

export default connect(mapStateToProps)(Wheel);
