import React from 'react';
import { connect } from 'react-redux';
import { showForm } from '../actions/checkout';
import Download from './Download';
import Mailform from './Mailform';

const handleBuyClick = dispatch => e => {
  e.preventDefault();
  dispatch(showForm());
};

export default connect(({ checkout }) => ({ checkout }))(
  ({ dispatch, checkout }) => (
    <div className="buy-button">
      <div className="content-wrapper">
        {
          checkout.paid ?
          <Download /> :
          <a href="#" className="button" onClick={handleBuyClick(dispatch)}>
            buy for 10$
          </a>
        }
      </div>
      {checkout.paid || <p className="text">You buy only one character (svg, png)</p>}
      {checkout.formVisible && <Mailform />}
    </div>
  )
);
