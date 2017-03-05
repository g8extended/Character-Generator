import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/character-slider.scss';
import Arrow   from './arrow';
import Profile from './profile';
import Wheel   from   './wheel';
import ColorPicker from './colorpicker';
import { updateProfileAssetType, updateProfileAssetColor, toggleProfileAssetVisible } from '../../actions/profile';
import { isConflicts, getConflictMessages } from '../../utils/conflicts';
import map from 'lodash/map';

const Slider = ({ assets, profile, dispatch }) => {
  const conflicts = isConflicts(assets, profile);

  const conflictsMessages = conflicts && map(getConflictMessages(assets, profile), message => {
    return <div key="conflicts" className="conflict-message">{message}</div>;
  });

  const visibilityButton = (assets.items[assets.current.asset].required ||
    <img src="/i/cancellation_icon.svg" className="visibilityButton" onClick={() => dispatch(toggleProfileAssetVisible())} />
  );

  const colorPicker = (
    <ColorPicker
      colors={assets.items[assets.current.asset].types}
      current={assets.current.type}
      urlPrefix={`/assets/${assets.current.asset}/`}
      onClick={type => dispatch(updateProfileAssetType(type))}
    />
  );

  const UnderProfileContainer = conflicts ? conflictsMessages : <div className="colorPickerContainer">
    {colorPicker}
    {visibilityButton}
  </div>

  return (
    <div>
      <div className="colorPickerContainer">
        <ColorPicker
            colors={assets.items[assets.current.asset].types[assets.current.type].colors}
            current={assets.current.color}
            urlPrefix={`/assets/${assets.current.asset}/${assets.current.type}/`}
            onClick={color => dispatch(updateProfileAssetColor(color))}
        />
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
  profile: state.profile
}))(Slider);
