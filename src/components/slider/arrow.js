import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateProfileAssetFileIndex } from '../../actions/profile';
import { isConflicts } from '../../utils/conflicts';

const Arrow = (
  ({ dispatch, assets, profile, type }) => {
      const url = `/i/arrow_${type}.svg`;
      const offset = type !== 'left' ? 1 : -1;

      const conflict = isConflicts(assets, profile);

      return (
        <div className={classNames('arrow', { disabled: conflict })} onClick={() => conflict || dispatch(updateProfileAssetFileIndex(offset))}>
          <img src={url} />
        </div>
      );  
  }
);

export default connect(({ profile, assets }) => ({ profile, assets }))(Arrow);

