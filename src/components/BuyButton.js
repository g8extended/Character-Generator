import React from 'react';
import { Link } from 'react-router';

export default (
  () => (
    <div className="buy-button">
      <div className="content-wrapper">
        <Link to="/payment" className="button">
          buy for 10$
        </Link>
      </div>
      <p className="text">You buy only one character (svg, png)</p>
    </div>
  )
);
