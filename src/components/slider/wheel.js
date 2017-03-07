import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateProfileAssetFileIndex } from '../../actions/profile';
import { isConflicts } from '../../utils/conflicts';
import { getIndexByOffset, getFiles } from '../../utils/files';
import Media from 'react-media';
import reverse from 'lodash/reverse';

const getImg = (files, fileIndex, offset, style, onClick) => {
  const file = files[getIndexByOffset(files.length, fileIndex, offset)];
  const img = {
    src: file.src,
    style: file.computedStyle
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
    const assetItem = assets.items[assets.current.asset];

    const getCharacterWrapper = (type, index) => {
      const offset = (type === 'left' ? -2 : 1) + index;
      return (
        <div key={index} className="character-wrapper">
          <div>index: {index}</div>
          <div>offset: {offset}</div>
          <div className="character">
            {getImg(files, fileIndex, offset, assetItem.style, () => conflict || dispatch(updateProfileAssetFileIndex(offset)))}
          </div>
        </div>
      );
    }

    const breakpoints = [1024, 1600];
    const breakpointsSorted = type === 'left' ? reverse(breakpoints) : breakpoints;

    return (
      <div className={classeName}>
        {breakpointsSorted.map((width, index) => (
          <Media key={index} query={{ minWidth: width }}>
            {matches => matches && getCharacterWrapper(type, index)}
          </Media>
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
