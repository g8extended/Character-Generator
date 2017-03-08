import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isConflicts } from '../../utils/conflicts';
import { Link } from 'react-router';
import { getIndexByOffset, getFiles } from '../../utils/files';

const Arrow = (
  ({ dispatch, assets, profile, offset, children, className, img }) => {
    const conflict = isConflicts(assets, profile);

    const files = getFiles(assets);
    const fileIndex = profile[assets.current.asset].fileIndex;
    const file = files[getIndexByOffset(files.length, fileIndex, offset)];

    return (
      <Link to={`/assets/${assets.current.asset}/${file.type}/${file.color}/true`} className={classNames(className, { disabled: conflict })} onClick={(e) => conflict && e.preventDefault()}>
        {img ? <img src={file.src} style={file.computedStyle} /> : children}
      </Link>
    );  
  }
);

export default connect(({ profile, assets }) => ({ profile, assets }))(Arrow);

