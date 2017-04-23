import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/character-slider.scss';
import Profile from './profile';
import Wheel   from   './wheel';
import Arrow from './arrow';
import ColorPicker from './colorpicker';
import { updateProfileAssetColor } from '../../actions/profile';
import map from 'lodash/map';
import LinkToAsset from './LinkToAsset';
import { filterColors } from '../../utils/filters';

const Slider = ({ dispatch, assets, profile }) => {
  const required = assets.items[assets.current.asset].required;
  const visible = profile[assets.current.asset].visible;

  const visibilityButton = (required ||
    <LinkToAsset offset={0} toggleVisible={true}>
      <img src={visible ? `/i/cancellation_icon.svg` : `/i/return_icon.svg`} className="visibilityButton" />
    </LinkToAsset>
  );

  const colorPicker = (
    <ColorPicker
      colors={filterColors(profile, assets.current.asset, assets.items[assets.current.asset].types[assets.current.type].colors)}
      current={assets.current}
      urlPrefix={`/assets/${assets.current.asset}/${assets.current.type}/`}
      onClick={color => dispatch(updateProfileAssetColor(color))}
    />
  );

  return (
    <div>
      <div className="character-slider">
        <Wheel type="left" />
        <Arrow type="left" />
        <Profile />
        <Arrow type="right" />
        <Wheel type="right" />
      </div>
      <div className="colorPickerContainer">
        {colorPicker}
        {visibilityButton}
      </div>
    </div>
    
  );
};

export default connect(state => ({
  assets: state.assets,
  profile: state.profile
}))(Slider);
