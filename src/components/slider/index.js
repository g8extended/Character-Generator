import React, { Component } from 'react';
import styles  from '../../styles/character-slider.scss';
import Arrow   from './arrow';
import Profile from './profile';
import Wheel   from   './wheel';

export default class CharacterSlider extends Component {
  render() {
    return (
      <div className="character-slider">
        <Wheel type="left" />
        <Arrow type="left" />
        <Profile />
        <Arrow type="right" />
        <Wheel type="right" />
      </div>
    );
  }
}
