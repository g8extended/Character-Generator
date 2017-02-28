import React, { Component } from 'react';
import '../../styles/character-slider.scss';
import Arrow   from './arrow';
import Profile from './profile';
import Wheel   from   './wheel';
import ColorPicker from './colorpicker';
import SubColorPicker from './subcolorpicker';

export default class CharacterSlider extends Component {
  render() {
    return (
      <div className="character-slider">
        <SubColorPicker />
        <Wheel type="left" />
        <Arrow type="left" />
        <Profile />
        <Arrow type="right" />
        <Wheel type="right" />
        <ColorPicker />
      </div>
    );
  }
}
