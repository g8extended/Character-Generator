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

export default connect(({ checkout }) => ({ checkout }))(
  ({ dispatch, checkout }) => (
    <div className="overlay">
      <div className="bg">
        <div className="mailform">
          <input type="email" value={checkout.email} onChange={handleEmailChange(dispatch)} placeholder="Enter Your Email" />
          <button className="button" onClick={handleSubmitClick(dispatch, checkout.email)}>
            SUMBIT
          </button>
          <a className="cross" onClick={handleEmailFormCloseClick(dispatch)}></a>
        </div>
      </div>
    </div>
  )
);
