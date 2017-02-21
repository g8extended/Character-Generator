import React, { Component } from 'react';
import styles from '../styles/character-slider.scss';

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
        <li className="arrow"> &#x276E; </li>
        <li className="character">
          <img src="svg/Body/body.svg" />
          <img src="svg/Hairstyles/hairstyle_03.svg" />
          <img src="svg/Shirts/shirt_03.svg" />
        </li>
        <li className="arrow"> &#x276F; </li>
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
