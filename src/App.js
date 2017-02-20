import React, { Component } from 'react';
import Body from './svg/Body/body.svg';
import Hairstyles from './svg/Hairstyles/hairstyle_01.svg';
import Shirts from './svg/Shirts/shirt_01.svg';
import styles from './styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <div className="character">
        <Body className="body" />
        <Hairstyles className="hairstyles" />
        <Shirts className="shirts" />
      </div>
    );
  }
}
