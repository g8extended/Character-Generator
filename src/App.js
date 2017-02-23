import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterSlider from './components/slider/';
import styles from './styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CharacterSlider />
        <Footer />
      </div>
    );
  }
}
