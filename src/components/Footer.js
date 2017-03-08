import React from 'react';
import { buyCurrentProfile } from '../actions/sale';
import PaypalButton from './PaypalButton';
import Download from './Download';

export default (
  () => (
    <div className="footer">
      <div className="content-wrapper">
        {/*<PaypalButton />*/}
        <Download />
        <button className="button" onClick={buyCurrentProfile} >buy for 10$</button>
      </div>
      <p className="text">You buy only one character (svg, png) </p>
    </div>
  )
);
