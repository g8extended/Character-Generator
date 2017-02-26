import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderNav from './HeaderNav';
import { buyAll } from '../actions/sale';

export default connect()((
  ({ dispatch }) => (
    <div className="header">
      <div className="logo part">
        <Link to="/assets/Hairstyles/brown"><img src="/i/logo.svg" /></Link>
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
