import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';

const getImage = (asset, profile, assets) => {
  if ( ! assets.data) return;
  const color = profile[asset.id].color;
  const subColor = profile[asset.id].subColor;
  const files = asset.subColors ? assets.data[asset.id].colors[color].colors[subColor].files : assets.data[asset.id].colors[color].files;
  const fileIndex = profile[asset.id].fileIndex % files.length;
  const fileName = files[fileIndex];
  if ( ! fileName) return;
  return asset.subColors ? `/svg/${asset.id}/${color}/${subColor}/${fileName}` : `/svg/${asset.id}/${color}/${fileName}`;
};

class Profile extends Component {
  render() {
    const { dispatch, profile, assets } = this.props;
    if ( ! assets.data) return <div />;
    const data = map(assets.data);
    data.sort((a, b) => a.sortOrder - b.sortOrder);

    return (
      <div className="profile"> 
        <div className="character">
          {map(data, asset => (
            <img key={asset.id} src={getImage(asset, profile, assets)} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
