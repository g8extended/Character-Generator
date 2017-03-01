import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';

const getImage = (asset, profile, assets) => {
  if ( ! assets.items || ! profile[asset.id].visible) return;
  const color = profile[asset.id].color;
  const subColor = profile[asset.id].subColor;
  const files = asset.subColors ? assets.items[asset.id].colors[color].colors[subColor].files : assets.items[asset.id].colors[color].files;
  const fileIndex = profile[asset.id].fileIndex % files.length;
  const fileName = files[fileIndex];
  if ( ! fileName) return;
  return asset.subColors ? `/svg/${asset.id}/${color}/${subColor}/${fileName}` : `/svg/${asset.id}/${color}/${fileName}`;
};

const Profile = ({ dispatch, profile, assets }) => {
  if ( ! assets.items) return <div />;
  const items = map(assets.items);
  items.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="profile"> 
      <div className="character">
        {map(items, asset => (
          <img key={asset.id} src={getImage(asset, profile, assets)} />
        ))}
      </div>
    </div>
  );
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
