import React, { Component } from 'react';
import HeaderNav from './components/HeaderNav';
import CharacterSlider from './components/CharacterSlider';
import styles from './styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <CharacterSlider />
      </div>
    );
  }
}
