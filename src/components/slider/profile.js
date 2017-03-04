import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';
import assetsConfig from '../../configs/styles';

const getImage = (assetItem, profile, assets) => {
  if ( ! assets.items || ! profile[assetItem.id].visible) return;
  const { color, subColor } = profile[assetItem.id];
  const files = assetItem.subColors ? assets.items[assetItem.id].colors[color].colors[subColor].files : assets.items[assetItem.id].colors[color].files;
  const fileIndex = profile[assetItem.id].fileIndex % files.length;
  const fileName = files[fileIndex];
  if ( ! fileName) return;
  return assetItem.subColors ? `/svg/${assetItem.id}/${color}/${subColor}/${fileName}` : `/svg/${assetItem.id}/${color}/${fileName}`;
};

// needs for hot reload when change styles
const remap = asset => ({
  ...asset,
  ...assetsConfig[asset.id]
});

const Profile = ({ dispatch, profile, assets }) => {
  if ( ! assets.items) return <div />;

  const items = map(assets.items).map(remap).filter(assetItem => profile[assetItem.id].visible);
  items.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="profile"> 
      <div className="character">
        {map(items, assetItem => assetItem.clickable ? (
          <Link key={assetItem.id} to={`/assets/${assetItem.id}`}>
            <img style={assetItem.style} src={getImage(assetItem, profile, assets)} />
          </Link>
        ) : (
          <img key={assetItem.id} style={assetItem.style} src={getImage(assetItem, profile, assets)} />
        ))}
      </div>
    </div>
  );
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
