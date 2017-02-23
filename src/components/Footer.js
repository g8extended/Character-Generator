import React from 'react';
import { buyCurrentProfile } from '../actions/sale';

export default (
  () => (
    <div className="footer">
      <div className="content-wrapper">
        <button className="button" onClick={buyCurrentProfile} >buy for 10$</button>	
        <p className="text">You buy only one character (svg, png)	</p>
      </div>
    </div>
  )
);
