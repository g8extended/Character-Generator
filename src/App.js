import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterSlider from './components/slider/';
import './styles/app.scss';

export default () => (
  <div>
    <Header />
    <CharacterSlider />
    <Footer />
  </div>
);
