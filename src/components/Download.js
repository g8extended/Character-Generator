import React from 'react';
import { connect } from 'react-redux';

const Download = ({ dispatch, checkout }) => {
  return (
    <a className="button" href="#" onClick={e => e.preventDefault()}>
      Download
    </a>
  );
};

export default connect(({ checkout }) => ({ checkout }))(Download);
