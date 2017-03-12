import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/character-slider.scss';
import Profile from './profile';
import Wheel   from   './wheel';
import Arrow from './arrow';
import ColorPicker from './colorpicker';
import { updateProfileAssetType, updateProfileAssetColor } from '../../actions/profile';
import { isConflicts, getConflictMessages } from '../../utils/conflicts';
import map from 'lodash/map';
import LinkToAsset from './LinkToAsset';
import classNames from 'classnames';

const Slider = ({ dispatch, assets, profile, colorpicker }) => {
  const conflicts = isConflicts(assets, profile);

  const conflictsMessages = conflicts && map(getConflictMessages(assets, profile), message => {
    return <div key="conflicts" className="conflict-message">{message}</div>;
  });

  const required = assets.items[assets.current.asset].required;
  const visible = profile[assets.current.asset].visible;

  const visibilityButton = (required ||
    <LinkToAsset offset={0} toggleVisible={true}>
      <img src={visible ? `/i/cancellation_icon.svg` : `/i/return_icon.svg`} className="visibilityButton" />
    </LinkToAsset>
  );

  const isColorPickerOnly = assets.items[assets.current.asset].types[assets.current.type].colors[assets.current.color].files.length < 2;

  const colorPicker = (
    <ColorPicker
        colors={assets.items[assets.current.asset].types[assets.current.type].colors}
        current={assets.current.color}
        urlPrefix={`/assets/${assets.current.asset}/${assets.current.type}/`}
        onClick={color => dispatch(updateProfileAssetColor(color))}
    />
  );

  const typePicker = (
    <ColorPicker
      colors={assets.items[assets.current.asset].types}
      current={assets.current.type}
      urlPrefix={`/assets/${assets.current.asset}/`}
      onClick={type => dispatch(updateProfileAssetType(type))}
    />
  );

  const animationClass = colorpicker.animationClassName;
  const colorPickerContClass = classNames('colorPickerContainer', {fade: !!animationClass});

  const UnderProfileContainer = conflicts ? conflictsMessages : <div className={colorPickerContClass}>
    {isColorPickerOnly ? colorPicker : typePicker}
    {visibilityButton}
  </div>

  return (
    <div>
      <div className={colorPickerContClass}>
        {isColorPickerOnly || colorPicker}
      </div>
      <div className="character-slider">
        <Wheel type="left" />
        <Arrow type="left" />
        <Profile />
        <Arrow type="right" />
        <Wheel type="right" />
      </div>
      {UnderProfileContainer}
    </div>
    
  );
};

export default connect(state => ({
  assets: state.assets,
  profile: state.profile,
  colorpicker: state.colorpicker
}))(Slider);
