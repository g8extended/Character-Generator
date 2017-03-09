import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isConflicts } from '../../utils/conflicts';
import { Link } from 'react-router';
import { getIndexByOffset, getFiles } from '../../utils/files';

const Arrow = (
  ({ dispatch, current, assets, profile, offset, children, className, img, visible = true, onClick = () => {}}) => {
    const conflict = isConflicts(assets, profile);

    current = current || assets.current;

    const files = getFiles(assets.items, current);
    const fileIndex = profile[current.asset].fileIndex;
    const file = files[getIndexByOffset(files.length, fileIndex, offset)];
    const baseUrl = `/assets/${current.asset}/${file.type}/${file.color}`;
    const url = visible ? `${baseUrl}/true` : baseUrl;

    return (
      <Link to={url} className={classNames(className, { disabled: conflict })} onClick={(e) => onClick() || conflict && e.preventDefault()}>
        {img ? <img src={file.src} style={file.computedStyle} /> : children}
      </Link>
    );  
  }
);

export default connect(({ profile, assets }) => ({ profile, assets }))(Arrow);

