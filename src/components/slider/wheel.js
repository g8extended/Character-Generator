import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateProfileAssetFileIndex } from '../../actions/profile';
import { isConflicts } from '../../utils/conflicts';
import { getIndexByOffset, getFiles } from '../../utils/files';
import Media from 'react-media';

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
    const offsets = type === 'left' ? [-3, -2, -1] : [1, 2, 3];

    const assetItem = assets.items[assets.current.asset];

    const getWheel = offset => (
      <div key={offset} className="character-wrapper">
        <div className="character">
          {getImg(files, fileIndex, offset, assetItem.style, () => conflict || dispatch(updateProfileAssetFileIndex(offset)))}
        </div>
      </div>
    );

    return (
      <div className={classeName}>
        <Media query={{ minWidth: 1024 }}>
          {getWheel(offsets[0])}
        </Media>
        <Media query={{ minWidth: 1600 }}>
          {getWheel(offsets[1])}
        </Media>
      </div>
    )
  }
);

const mapStateToProps = state => ({
  assets: state.assets,
  profile: state.profile
});

export default connect(mapStateToProps)(Wheel);
