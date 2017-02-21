import React, { Component } from 'react';
import styles from '../../styles/character-slider.scss';
import Arrow from './arrow';

export default class CharacterSlider extends Component {
  render() {
    return (
      <ul className="character-slider">
        <li className="character">
          <img src="svg/Hairstyles/hairstyle_01.svg" />
        </li>
        <li className="character">
          <img src="svg/Hairstyles/hairstyle_02.svg" />
        </li>
        <Arrow type="left" />
        <li className="character">
          <img src="svg/Body/body.svg" />
          <img src="svg/Hairstyles/hairstyle_03.svg" />
          <img src="svg/Shirts/shirt_03.svg" />
        </li>
        <Arrow type="right" />
        <li className="character">
          <img src="svg/Hairstyles/hairstyle_04.svg" />
        </li>
        <li className="character">
          <img src="svg/Hairstyles/hairstyle_05.svg" />
        </li>
      </ul>
    );
  }
}
