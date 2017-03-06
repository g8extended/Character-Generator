import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CharacterSlider from './slider/';
import AssetsConfig from './AssetsConfig';
import '../styles/app.scss';

export default () => (
  <div>
    <Header />
    <CharacterSlider />
    <Footer />
    <AssetsConfig />
  </div>
);
