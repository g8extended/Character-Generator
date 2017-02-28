import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfileAssetSubColor } from '../../actions/profile';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';

const ColorPicker = ({ assets, dispatch }) => {
  return (
    <div className="colorPicker">
      {map(assets.data[assets.current].colors[assets.currentColor].colors, subColor => {
        const className = classNames('color', subColor.id, {
          active: assets.currentSubColor === subColor.id
        });

        return (
          <Link key={subColor.id}
            to={`/assets/${assets.current}/${assets.currentColor}/${subColor.id}`}
            className={className} activeClassName="active"
            onClick={() => dispatch(updateProfileAssetSubColor(subColor.id))}
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
