import React from 'react';
import { connect } from 'react-redux';

export default connect()((
  ({ dispatch }) => (
    <div className="overlay" style={{display: 'none'}}>
      <div className="bg">
        <div className="mailform">
          <input type="text" placeholder="Enter Your Email" />
          <button className="button">SUMBIT</button>
          <a className="cross"></a>
        </div>
      </div>
    </div>
  )
));