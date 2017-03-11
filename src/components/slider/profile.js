import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import LinkToAsset from './LinkToAsset';
import AssetImage from './AssetImage';

const Profile = ({ dispatch, profile, assets }) => {
  if ( ! assets.items) return <div />;

  const items = map(assets.items).filter(item => profile[item.id].visible);
  items.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="profile">
      <div className="character-wrapper">
        <div className="character">
          {map(items, assetItem => (
            <LinkToAsset key={assetItem.id} current={profile[assetItem.id]} offset={0}>
              <AssetImage />
            </LinkToAsset>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
