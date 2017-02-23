import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decode } from 'he';
import { updateProfileAssetFileIndex } from '../../actions/profile';

const Arrow = (
  ({ dispatch, type }) => (
    <div className="arrow" onClick={() => dispatch(updateProfileAssetFileIndex(type !== 'left' ? 1 : -1))}>
      {decode(type === 'left' ? '&#x276E;' : '&#x276F;')}
    </div>
  )
);

export default connect()(Arrow);
