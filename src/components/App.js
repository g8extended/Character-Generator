import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CharacterSlider from './slider/';
import AssetsConfig from './AssetsConfig';
import '../styles/app.scss';

function centurion () {
  const cont     = document.querySelector('#content-zone');
  const header_h = document.querySelector('.header').clientHeight;
  const foot_h   = document.querySelector('.site-footer').clientHeight;
  const cont_h   = cont.clientHeight;
  const body_h   = document.body.clientHeight;
  const body_hh  = cont_h + header_h + foot_h;
  const top      = window.innerHeight >= body_hh ? ((body_h - body_hh) / 2) : 0;
  cont.style.top = top + 'px';
}

export default class HeaderNav extends Component {

  componentDidMount() {
    centurion();
    window.onresize = centurion;
  }

  render() {
    return (
      <div>
        <Header />
        <div id="content-zone">
          <CharacterSlider />
          <Footer />
        </div>
        <AssetsConfig />
      </div>
    );
  }
}
