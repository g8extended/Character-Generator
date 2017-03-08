import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateProfileAssetFileIndex } from '../../actions/profile';
import { isConflicts } from '../../utils/conflicts';
import { Link } from 'react-router';
import { getIndexByOffset, getFiles } from '../../utils/files';

const Arrow = (
  ({ dispatch, assets, profile, type }) => {
    const url = `/i/arrow_${type}.svg`;
    const offset = type !== 'left' ? 1 : -1;

    const conflict = isConflicts(assets, profile);

    const files = getFiles(assets);
    const fileIndex = profile[assets.current.asset].fileIndex;
    const file = files[getIndexByOffset(files.length, fileIndex, offset)];

    return (
      <Link to={`/assets/${assets.current.asset}/${file.type}/${file.color}`} className={classNames('arrow', { disabled: conflict })} onClick={() => conflict || dispatch(updateProfileAssetFileIndex(offset))}>
        <img src={url} />
      </Link>
    );  
  }
);

export default connect(({ profile, assets }) => ({ profile, assets }))(Arrow);

