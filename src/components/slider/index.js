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
      colors={assets.items[assets.current.asset].colors[assets.current.color].colors}
      current={assets.current.subColor}
      urlPrefix={`/assets/${assets.current}/${assets.current.color}/`}
      onClick={color => dispatch(updateProfileAssetSubColor(color))}
    />
    <Wheel type="left" />
    <Arrow type="left" />
    <Profile />
    <Arrow type="right" />
    <Wheel type="right" />
    {
      assets.items[assets.current.asset].required ||
      <button onClick={() => dispatch(toggleProfileAssetVisible())}>
        toggle element visibility
      </button>
    }
    <ColorPicker
      colors={assets.items[assets.current.asset].colors}
      current={assets.current.color}
      urlPrefix={`/assets/${assets.current.asset}/`}
      onClick={color => dispatch(updateProfileAssetColor(color))}
    />
  </div>
);

export default connect(state => ({
  assets: state.assets
}))(Slider);
