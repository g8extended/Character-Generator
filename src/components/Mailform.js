import React from 'react';
import { connect } from 'react-redux';
import { hideForm, setEmail } from '../actions/checkout';
import { saveProfile } from '../actions/profile';

const handleEmailFormCloseClick = dispatch => e => {
  dispatch(hideForm());
};

const handleEmailChange = dispatch => e => {
  dispatch(setEmail(e.target.value));
};

const handleSubmitClick = (dispatch, email) => e => {
  e.preventDefault();
  dispatch(saveProfile(email));
  dispatch(hideForm());
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default connect(({ checkout }) => ({ checkout }))(
  ({ dispatch, checkout }) => (
    <div className="overlay">
      <div className="bg">
        <div className="mailform">
          <input type="email" value={checkout.email} onChange={handleEmailChange(dispatch)} placeholder="Enter Your Email" />
          <button className="button" onClick={handleSubmitClick(dispatch, checkout.email)} disabled={!isValidEmail(checkout.email)}>
            SUMBIT
          </button>
          <a className="cross" onClick={handleEmailFormCloseClick(dispatch)}></a>
        </div>
      </div>
    </div>
  )
);
