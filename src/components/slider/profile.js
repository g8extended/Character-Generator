import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';
import ColorPicker from './colorpicker';

const getImage = (asset, profile, assets) => {
  if ( ! assets.data) return;
  const color = profile[asset.id].color;
  const files = assets.data[asset.id].colors[color].files;
  const fileIndex = profile[asset.id].fileIndex % files.length;
  const fileName = files[fileIndex];
  return fileName ? `/svg/${asset.id}/${color}/${fileName}` : null;
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
        <ColorPicker />
      </div>
    );
  }
}

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
