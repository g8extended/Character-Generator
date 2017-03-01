import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/character-slider.scss';
import Arrow   from './arrow';
import Profile from './profile';
import Wheel   from   './wheel';
import ColorPicker from './colorpicker';
import { updateProfileAssetColor, updateProfileAssetSubColor, toggleProfileAssetVisible } from '../../actions/profile';

const Slider = ({ assets, dispatch }) => (
  <div className="character-slider">
    <ColorPicker
      colors={assets.data[assets.current].colors[assets.currentColor].colors}
      current={assets.currentSubColor}
      urlPrefix={`/assets/${assets.current}/${assets.currentColor}/`}
      onClick={color => dispatch(updateProfileAssetSubColor(color))}
    />
    <Wheel type="left" />
    <Arrow type="left" />
    <Profile />
    <Arrow type="right" />
    <Wheel type="right" />
    {
      assets.data[assets.current].required ||
      <button onClick={() => dispatch(toggleProfileAssetVisible())}>
        toggle element visibility
      </button>
    }
    <ColorPicker
      colors={assets.data[assets.current].colors}
      current={assets.currentColor}
      urlPrefix={`/assets/${assets.current}/`}
      onClick={color => dispatch(updateProfileAssetColor(color))}
    />
  </div>
);

export default connect(state => ({
  assets: state.assets
}))(Slider);
