import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { sendProfile } from '../actions/profile';

const Download = ({ dispatch, checkout }) => {
  return (
    <div>
      <a className="button" href="#" onClick={e => e.preventDefault() || dispatch(sendProfile(checkout.email))}>
        Download
      </a>
      <p>
        <Link to="/">Return to home</Link>
      </p>
    </div>
  );
};

export default connect(({ checkout }) => ({ checkout }))(Download);
