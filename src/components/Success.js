import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderNav from './HeaderNav';
import { buyAll } from '../actions/sale';

export default connect()(
  ({ dispatch }) => (
  <div className="success-page">
    <div className="success-icon">
      <img src="http://placehold.it/33x33" alt="success icon" />
    </div>
    <h2 className="blue-header">PAYMENT COMPLETE</h2>
    <div className="text">
      You can download your character here or in email
    </div>
    <div className="character-slider">
      <div className="profile">
        <div className="character-wrapper">
          <div className="character">
            <img src="/svg/Body/01/default/body.svg" style={{
              width:'61%',
              height:'61%',
              left:'20%',
              top:'18%'
            }} alt="Kavoon character" />
          </div>
        </div>
      </div>
    </div> 
    <div>
      <a href="#" className="button">Download character</a>
      <Link to="/" className="link">GO TO HOME PAGE</Link>
    </div>
  </div>
  )
);
