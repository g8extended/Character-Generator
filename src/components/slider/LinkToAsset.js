import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isConflicts } from '../../utils/conflicts';
import { Link } from 'react-router';
import { getIndexByOffset, getFiles } from '../../utils/files';
import { updateProfileAsset, toggleProfileAssetVisible } from '../../actions/profile';

const Arrow = (
  ({ dispatch, current, assets, profile, offset, children, className, img, apply, toggleVisible }) => {
    const conflict = isConflicts(assets, profile);

    current = current || assets.current;

    const required = assets.items[current.asset].required;
    const files = getFiles(assets.items, current);
    const profileIndex = profile[current.asset].index;
    const index = getIndexByOffset(files.length, profileIndex, offset);
    const file = files[index];
    const baseUrl = file.url;
    const url = file.fileType === 'color' ? `${baseUrl}/${index}` : baseUrl;

    let onClick = () => {};

    if (apply) {
      onClick = () => dispatch(updateProfileAsset({
        ...current,
        type: file.type,
        index
      }));
    }

    if (toggleVisible) {
      onClick = onClick = () => dispatch(toggleProfileAssetVisible());
    }

    return (
      <Link to={url} className={classNames(className, { disabled: files.length < 2 || conflict })} onClick={(e) => onClick() || conflict && e.preventDefault()} onDoubleClick={() => required || dispatch(toggleProfileAssetVisible())}>
        {img ? <img src={file.src} style={file.computedStyle} /> : children}
      </Link>
    );  
  }
);

export default connect(({ profile, assets }) => ({ profile, assets }))(Arrow);
