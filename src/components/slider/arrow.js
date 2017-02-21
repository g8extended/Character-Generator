import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decode } from 'he';
import { incAsset, decAsset } from '../../actions/assets';

const Arrow = (
  ({ dispatch, type }) => (
    <div className="arrow" onClick={() => dispatch(type === 'left' ? incAsset() : decAsset())}>
      {decode(type === 'left' ? '&#x276E;' : '&#x276F;')}
    </div>
  )
);

export default connect()(Arrow);
