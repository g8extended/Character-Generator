import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';

class Profile extends Component {
  render() {
    const { dispatch, profile, assets } = this.props;
    if ( ! assets.data.Hairstyles) return <div />;
    const data = map(assets.data);
    data.sort((a, b) => a.sortOrder - b.sortOrder);
    return (
      <div className="character">
        {map(data, asset => (
          <img
            key={asset.id}
            src={`svg/${asset.id}/${assets.data[asset.id].files[profile[asset.id]]}`}
            onClick={() => dispatch(assetClick(asset.id))}
          />
        ))}
      </div>
    );
  }
}

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
