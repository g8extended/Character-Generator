import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { sendProfile } from '../actions/profile';

const Download = ({ dispatch, checkout }) => {
  return (
    <a className="button" href="#" onClick={e => e.preventDefault() || dispatch(sendProfile(checkout.email))}>
      Download
    </a>
  );
};

export default connect(({ checkout }) => ({ checkout }))(Download);
