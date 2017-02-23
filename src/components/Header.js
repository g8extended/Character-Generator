import React from 'react';
import HeaderNav from './HeaderNav';
import { buyAll } from '../actions/sale';

export default (
  () => (
    <div className="header">
      <div className="logo part">
      	<a href="/"><img src="logo.png" /></a>
      </div>
      <div className="part nav">
      	<HeaderNav />
      </div>
      <div className="part btn">
      	<button className="button" onClick={buyAll} >buy all for 28$</button>
      </div>
    </div>
  )
);
