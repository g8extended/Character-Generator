import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';
import { getIndexByOffset, getFiles } from '../../utils/files';

const getImage = (assetItem, profile, assets) => {
  if ( ! assets.items || ! profile[assetItem.id].visible) return;

  const files = getFiles({
    ...assets,
    current:{
      ...profile[assetItem.id],
      asset: assetItem.id
    }
  });

  const fileIndex = profile[assetItem.id].fileIndex;
  const file = files[fileIndex];

  if ( ! file.id) return;

  return {
    src: file.src,
    style: file.style
  };
};

const Profile = ({ dispatch, profile, assets }) => {
  if ( ! assets.items) return <div />;

  const items = map(assets.items).filter(assetItem => profile[assetItem.id].visible);
  items.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="profile"> 
      <div className="character">
        {map(items, assetItem => assetItem.clickable ? (
          <Link key={assetItem.id} to={`/assets/${assetItem.id}`}>
            <img {...getImage(assetItem, profile, assets)} />
          </Link>
        ) : (
          <img key={assetItem.id} {...getImage(assetItem, profile, assets)} />
        ))}
      </div>
    </div>
  );
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
