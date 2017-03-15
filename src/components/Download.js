import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Download = ({ download }) => {
  if ( ! download) return (
    <div class="loading">
      <p>Thank you for the payment!</p>
      <p>please wait...</p>
      <p>generating character for you</p>
    </div>
  );

  return (
    <div className="content-wrapper">
      <a className="button" href={download}>
        Download Character
      </a>
      <p>
        <Link to="/">Return to home</Link>
      </p>
    </div>
  );
};

export default connect(({ download }) => ({ download }))(Download);
