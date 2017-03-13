import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';
import doubleColors from '../../configs/extra_colors'

function getStyles(colors, isActive, isDoubleColor) {
  return  {
    background: isDoubleColor ? `linear-gradient(to right, ${colors[0]} 0%, ${colors[0]} 50%, ${colors[1]} 50%, ${colors[1]} 100%)` : undefined,
    backgroundColor: isDoubleColor ? undefined : colors[1],
    borderColor: isActive ? typeof colors[2] === 'string' ? colors[2] : colors[colors[2]] : undefined
  };
}

const ColorPicker = ({ colors, current: { asset, type, color }, urlPrefix, onClick }) => {
  if (Object.keys(colors).length < 2) return <div />;

  return (
    <div className="colorPicker">
      {map(colors, colorItem => {
        const isActive = color === colorItem.id;
        const className = classNames('color', colorItem.id, { active: isActive });
        const isEyes = asset === 'Eyes';
        const isSpecialType = ! colorItem.id.indexOf('brown_') && type !== '03';
        const isDoubleColor = colorItem.id.indexOf('_') !== -1;

        const file = colorItem.files[0];
        const color1 = isEyes ? isSpecialType ? file.svgColors[2] : file.svgColors[2] : file.svgColors[0];
        const color2 = isEyes ? isSpecialType ? file.svgColors[3] : file.svgColors[5] : file.svgColors[1];
        const borderColor = file.svgColors[file.svgColors.length - 1];
        const colors = doubleColors[colorItem.id] || [color1, color2, borderColor];
        const style  = getStyles(colors, isActive, isDoubleColor);

        return (
          <Link key={colorItem.id}
            to={`${urlPrefix}${colorItem.id}`}
            style={style}
            className={className} activeClassName="active"
            onClick={() => onClick(colorItem.id)}
          />
        );
      })}
    </div>
  );
}

export default ColorPicker;
