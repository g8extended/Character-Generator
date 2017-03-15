import React from 'react';
import PaypalButton from './PaypalButton';
import Profile from './slider/profile';

export default (
  () => (
    <center>
      <div className="character-slider">
        <Profile />
      </div>
      <PaypalButton />
    </center>
  )
);
