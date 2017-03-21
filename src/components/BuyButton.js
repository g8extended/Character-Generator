import React from 'react';
import { connect } from 'react-redux';
import { showForm, setEmail, submitForm } from '../actions/checkout';
import Download from './Download';

const handleBuyClick = dispatch => e => {
  e.preventDefault();
  dispatch(showForm());
};

const handleEmailChange = dispatch => e => {
  dispatch(setEmail(e.target.value));
};

const handleSubmitClick = dispatch => e => {
  e.preventDefault();
  dispatch(submitForm());
};

export default connect(({ checkout }) => ({ checkout }))(
  ({ dispatch, checkout }) => (
    <div className="buy-button">
      <div className="content-wrapper">
        {
          checkout.paid ?
          <Download /> :
          checkout.formVisible ?
          <div>
            <input type="email" value={checkout.email} onChange={handleEmailChange(dispatch)} />
            <a href="#" className="button" onClick={handleSubmitClick(dispatch)}>
              submit
            </a>
          </div>
          :
          <a href="#" className="button" onClick={handleBuyClick(dispatch)}>
            buy for 10$
          </a>
        }
      </div>
      {checkout.paid || <p className="text">You buy only one character (svg, png)</p>}
    </div>
  )
);
