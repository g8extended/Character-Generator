import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorClick } from '../../actions/assets';
import map from 'lodash/map';
import classNames from 'classnames';

const ColorPicker = ({ data, curent, dispatch }) => {
	return (
    <div className="colorPicker">
      {map(data, color => {
       const className = classNames('color', color.title, {active: curent === color.id });
       return <span className={className} key={color.id} onClick={() => dispatch(colorClick(color.id))} ></span>;
      })}
    </div>
  );
}

export default connect(store => ({
	data: store.assets.colors,
	curent: store.assets.currentColor
}))(ColorPicker);