import React, { Children, cloneElement } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { getFile } from '../../utils/files';
import { updateProfileAsset, toggleProfileAssetVisible } from '../../actions/profile';

const LinkToAsset = (
  ({ dispatch, current, assets, profile, offset, children, className, apply, toggleVisible }) => {
    current = current || assets.current;

    const clickable = assets.items[current.asset].clickable;
    const required = assets.items[current.asset].required;
    const file = getFile(assets.items[current.asset], current, offset);

    let onClick = () => {};

    if (apply) {
      onClick = () => dispatch(updateProfileAsset({
        ...current,
        type: file.type,
        transitionClassName: offset < 0 ? 'slide-left' : 'slide-right'
      }));
    }

    if (toggleVisible) {
      onClick = onClick = () => dispatch(toggleProfileAssetVisible());
    }

    return (
      <Link to={clickable ? file.url : ''} className={classNames(className, profile[current.asset].transitionClassName)} onClick={(e) => onClick() || toggleVisible && e.preventDefault()} onDoubleClick={() => required || dispatch(toggleProfileAssetVisible())}>
        {Children.map(children, child => cloneElement(child, { file }))}
      </Link>
    );  
  }
);

export default connect(({ profile, assets }) => ({ profile, assets }))(LinkToAsset);

