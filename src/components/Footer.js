import React from 'react';
import { buyCurrentProfile } from '../actions/sale';
import PaypalButton from './PaypalButton';

export default (
  () => (
    <div>
      <div className="footer">
        <div className="content-wrapper">
          {/*<PaypalButton />*/}
          <button className="button" onClick={buyCurrentProfile} >buy for 10$</button>
        </div>
        <p className="text">You buy only one character (svg, png) </p>
      </div>
      <div className="hr" />
      <div className="links">
        <a href="http://soryan.me">
          Developed by <i>G8.extented</i>
        </a>
        <a href="http://twitter.com">
          <img src="http://placehold.it/24x24" alt="" />Twitter
        </a>
        <a href="http://facebook.com">
          <img src="http://placehold.it/24x24" alt="" />Facebook
        </a>
        <a href="http://creativemarket.com">
          <img src="http://placehold.it/24x24" alt="" />CreativeMarket
        </a>
        <a href="http://behance.com">
          <img src="http://placehold.it/24x24" alt="" />Behance
        </a>
        <a href="http://dribbble.com">
          <img src="http://placehold.it/24x24" alt="" />Dribbble
        </a>
        <a href="http://kavoon.com">
          <img src="http://placehold.it/24x24" alt="" />kavoon@gmail.com
        </a>
      </div>
    </div>
  )
);
