import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfileAssetFileIndex } from '../../actions/profile';

const Arrow = (
  ({ dispatch, type }) => {
      const url = `i/arrow_${type}.svg`;
      return (
        <div className="arrow" onClick={() => dispatch(updateProfileAssetFileIndex(type !== 'left' ? 1 : -1))}>
          <img src={url} />
        </div>
      );  
  }
);

export default connect()(Arrow);

