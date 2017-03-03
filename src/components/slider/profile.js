import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';

const getImage = (asset, profile, assets) => {
  if ( ! assets.items || ! profile[asset.id].visible) return;
  const { color, subColor } = profile[asset.id];
  const files = asset.subColors ? assets.items[asset.id].colors[color].colors[subColor].files : assets.items[asset.id].colors[color].files;
  const fileIndex = profile[asset.id].fileIndex % files.length;
  const fileName = files[fileIndex];
  if ( ! fileName) return;
  return asset.subColors ? `/svg/${asset.id}/${color}/${subColor}/${fileName}` : `/svg/${asset.id}/${color}/${fileName}`;
};

const Profile = ({ dispatch, profile, assets }) => {
  if ( ! assets.items) return <div />;
  const items = map(assets.items).filter(asset => profile[asset.id].visible);
  items.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="profile"> 
      <div className="character">
        {map(items, asset => (
          <Link key={asset.id} to={`/assets/${asset.id}`}>
            <img style={{ width: asset.width, height: asset.height, left: asset.left, top: asset.top }} src={getImage(asset, profile, assets)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
