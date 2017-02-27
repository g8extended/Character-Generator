import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfileAssetColor } from '../../actions/profile';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';

const ColorPicker = ({ assets, dispatch }) => {
  return (
    <div className="colorPicker">
      {map(assets.data[assets.current].colors, color => {
        const className = classNames('color', color.id, {
          active: assets.currentColor === color.id
        });

        return (
          <Link key={color.id}
            to={`/assets/${assets.current}/${color.id}`}
            className={className} activeClassName="active"
            onClick={() => dispatch(updateProfileAssetColor(color.id))}
          >
          </Link>
        );
      })}
    </div>
  );
}

export default connect(state => ({
  assets: state.assets
}))(ColorPicker);
