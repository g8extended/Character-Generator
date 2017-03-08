import React from 'react';
import PaypalButton from './PaypalButton';
import Profile from './slider/profile';
import Download from './Download';

export default (
  () => (
    <center>
      <PaypalButton />
      <div className="character-slider">
        <Profile />
      </div>
      <Download />
    </center>
  )
);
