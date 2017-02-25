import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import HeaderNav from './HeaderNav';
import { buyAll } from '../actions/sale';

export default connect()((
  ({ dispatch }) => (
    <div className="header">
      <div className="logo part">
      	<a href="/" onClick={e => e.preventDefault() || dispatch(push('/'))}><img src="/i/logo.svg" /></a>
      </div>
      <div className="part nav">
      	<HeaderNav />
      </div>
      <div className="part btn">
      	<button className="button" onClick={buyAll} >buy all for 28$</button>
      </div>
    </div>
  )
));
