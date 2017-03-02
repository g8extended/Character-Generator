import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateProfileAssetFileIndex } from '../../actions/profile';
import { isConflicts } from '../../utils/conflicts';

const getIndexByOffset = (length, index, offset) => {
  return (length + index + offset) % length;
};

const getFiles = ({ current: {asset, color, subColor}, items }) => {
  return items[asset].subColors ? items[asset].colors[color].colors[subColor].files : items[asset].colors[color].files;
};

const getFilePath = ({ current: { asset, color, subColor }, items }) => {
  return items[asset].subColors ? `/svg/${asset}/${color}/${subColor}/` : `/svg/${asset}/${color}/`;
};

const getImg = (filePath, files, fileIndex, offset, onClick) => {
  const src = filePath + files[getIndexByOffset(files.length, fileIndex, offset)];
  return src ? <img src={src} onClick={onClick} /> : null;
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
    const filePath = getFilePath(assets);
    const fileIndex = profile[assets.current.asset].fileIndex;
    const offsets = type === 'left' ? [-2, -1] : [1, 2];

    return (
      <div className={classeName}>
        {offsets.map((offset, index) => (
          <div key={index} className="character">
            {getImg(filePath, files, fileIndex, offset, () => conflict || dispatch(updateProfileAssetFileIndex(offset)))}
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
