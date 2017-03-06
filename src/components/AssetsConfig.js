import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import fromPairs from 'lodash/fromPairs';
import { getIndexByOffset, getFiles } from '../utils/files';
import { moveProfileAssetType } from '../actions/profile';
import assetsConfig from '../configs/assets';

const getStyle = (assetItem, type, profile, assets) => {
  const color = profile[assetItem.id].color;
  const file = assets.items[assetItem.id].types[type].colors[color].files[0];
  return {
    left: file.style.left,
    top: file.style.top
  };
};

class AssetsConfig extends Component {
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

    const updatedAssetsConfig = map(assetsConfig, assetItem => ({
      ...assetItem,
      styles: fromPairs(map(assetItem.styles, (style, type) => [type, getStyle(assetItem, type, profile, assets)]))
    }));

    const json = JSON.stringify(updatedAssetsConfig, null, '  ').replace(/'/g, '\\\'').replace(/\"/g, '\'').replace(/'([a-z]\w+)':/g, '\$1:');

    return (
      <div className="positions">
        <textarea>{`import keyBy from 'lodash/keyBy';\n\nexport default keyBy(${json}, 'id');\n`}</textarea>
      </div>
    );
  }
};

export default connect(({ profile, assets }) => ({ profile, assets }))(AssetsConfig);
