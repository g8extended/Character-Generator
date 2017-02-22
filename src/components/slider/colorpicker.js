import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorClick } from '../../actions/assets';
import map from 'lodash/map';
import classNames from 'classnames';

const ColorPicker = ({ assets, dispatch }) => {
	return (
    <div className="colorPicker">
      {map(assets.data[assets.current].colors, color => {
       const className = classNames('color', color.id, { active: assets.current === color.id });
       return <span className={className} key={color.id} onClick={() => dispatch(colorClick(color.id))}></span>;
      })}
    </div>
  );
}

export default connect(store => ({
	assets: store.assets
}))(ColorPicker);