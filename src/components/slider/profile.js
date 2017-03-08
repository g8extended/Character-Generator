import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import map from 'lodash/map';
import { getFile } from '../../utils/files';
import Arrow from './arrow';

const getImage = (assetItem, profile, assets) => {
  const file = getFile(assetItem, profile, assets);

  if ( ! file) return;

  return {
    src: file.src,
    style: file.computedStyle
  };
};

const Profile = ({ dispatch, profile, assets }) => {
  if ( ! assets.items) return <div />;

  const items = map(assets.items).filter(assetItem => profile[assetItem.id].visible);
  items.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="profile"> 
      <Arrow type="left" />
      <div className="character">
        {map(items, assetItem => assetItem.clickable ? (
          <Link key={assetItem.id} to={`/assets/${assetItem.id}`}>
            <img {...getImage(assetItem, profile, assets)} />
          </Link>
        ) : (
          <img key={assetItem.id} {...getImage(assetItem, profile, assets)} />
        ))}
      </div>
      <Arrow type="right" />
    </div>
  );
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
