import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { assetClick } from '../../actions/assets';
import map from 'lodash/map';
import { getIndexByOffset, getFiles } from '../../utils/files';
import { moveProfileAssetType } from '../../actions/profile';

const getFile = (assetItem, profile, assets) => {
  const files = getFiles({
    ...assets,
    current:{
      ...profile[assetItem.id],
      asset: assetItem.id
    }
  });

  const fileIndex = profile[assetItem.id].fileIndex;
  return files[fileIndex];
};

const getImage = (assetItem, profile, assets) => {
  if ( ! assets.items || ! profile[assetItem.id].visible) return;

  const file = getFile(assetItem, profile, assets);

  if ( ! file.id) return;

  return {
    src: file.src,
    style: file.computedStyle
  };
};

class Profile extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    document.addEventListener('keydown', e => {
      if ( ! [37, 38, 39, 40].includes(e.which)) return;
      e.preventDefault();
      dispatch(moveProfileAssetType(e.which));
    });
  }

  render() {
    const { dispatch, profile, assets } = this.props;

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
  }
};

export default connect(({ profile, assets }) => ({ profile, assets }))(Profile);
