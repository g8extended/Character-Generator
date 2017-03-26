import React from 'react';
import { connect } from 'react-redux';
import { hideForm, setEmail, submitForm } from '../actions/checkout';
import Download from './Download';

const handleEmailFormCloseClick = dispatch => e => {
  dispatch(hideForm());
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
    <div className="overlay">
      <div className="bg">
        <div className="mailform">
          <input type="email" value={checkout.email} onChange={handleEmailChange(dispatch)} placeholder="Enter Your Email" />
          <button className="button" onClick={handleSubmitClick(dispatch)}>
            SUMBIT
          </button>
          <a className="cross" onClick={handleEmailFormCloseClick(dispatch)}></a>
        </div>
      </div>
    </div>
  )
);
