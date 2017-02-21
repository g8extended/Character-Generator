import React, { Component } from 'react';
import Body from './svg/Body/body.svg';
import Hairstyles from './svg/Hairstyles/hairstyle_01.svg';
import Shirts from './svg/Shirts/shirt_01.svg';
import styles from './styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <ul className="character-slider">
        <li className="character">
          <Hairstyles className="hairstyles" />
        </li>
        <li className="character">
          <Hairstyles className="hairstyles" />
        </li>
        <li>
          left arrow
        </li>
        <li className="character">
          <Body className="body" />
          <Hairstyles className="hairstyles" />
          <Shirts className="shirts" />
        </li>
        <li>
          right arrow
        </li>
        <li className="character">
          <Hairstyles className="hairstyles" />
        </li>
        <li className="character">
          <Hairstyles className="hairstyles" />
        </li>
      </ul>
    );
  }
}
