import React from 'react';
import { buyCurrentProfile } from '../actions/sale';
import PaypalButton from './PaypalButton';

export default (
  () => (
    <div className="footer">
      <div className="content-wrapper">
        <span>buy for <strong>$10</strong></span>
        <PaypalButton />
        {/*<button className="button" onClick={buyCurrentProfile} >buy for 10$</button>*/}
        <p className="text">You buy only one character (svg, png) </p>
      </div>
    </div>
  )
);
