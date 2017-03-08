import React from 'react';
import { connect } from 'react-redux';
import { downloadProfile } from '../actions/profile';

const Download = ({ dispatch }) => (
  <div>
    <button className="button" onClick={() => dispatch(downloadProfile())}>
      Download Character
    </button>
  </div>
);

export default connect()(Download);
