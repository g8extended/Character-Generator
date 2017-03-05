import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';
import assetsConfig from '../../configs/styles';

const convert = base => value => value / base * 100 + '%';
const width = value => convert(739.6)(value);
const height = value => convert(909.9)(value);

const getImage = (assetItem, profile, assets) => {
  if ( ! assets.items || ! profile[assetItem.id].visible) return;
  const { type, color } = profile[assetItem.id];
  const files = assets.items[assetItem.id].types[type].colors[color].files;
  const fileIndex = profile[assetItem.id].fileIndex % files.length;
  const file = files[fileIndex];
  if ( ! file.id) return;
  const style = assetsConfig[assetItem.id].style;
  return {
    src: `/svg/${assetItem.id}/${type}/${color}/${file.id}`,
    style: {
      width: width(file.style.width),
      height: height(file.style.height),
      left: width(style.left),
      top: height(style.top)
    }
  }
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
