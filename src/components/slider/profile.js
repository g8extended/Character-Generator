import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';

class Profile extends Component {
  render() {
    const { profile, assets } = this.props;
    if ( ! assets.data.Hairstyles) return <div />;
    return (
      <div className="character">
        {map(assets.data, asset => (
          <img src={`svg/${asset.id}/${assets.data[asset.id].files[profile[asset.id]]}`} />
        ))}
      </div>
    );
  }
}

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
