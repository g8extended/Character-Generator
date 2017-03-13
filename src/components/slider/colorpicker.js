import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';

function getStyles(color, isActive, isDoubleColor) {
  return  {
    background: isDoubleColor ? `linear-gradient(to right, ${color[0]} 0%, ${color[0]} 50%, ${color2} 50%, ${color[1]} 100%)` : undefined,
    backgroundColor: color[1],
    borderColor: isActive ? typeof color[2] === 'string' ? color[2] : color[color[2]] : undefined
  };
}

const ColorPicker = ({ colors, current: { asset, type, color }, urlPrefix, onClick }) => {
  if (Object.keys(colors).length < 2) return <div />;

  return (
    <div className="colorPicker">
      {map(colors, colorItem => {
        const isActive = color === colorItem.id;
        const className = classNames('color', colorItem.id, {
          active: isActive
        });

        const isEyes = asset === 'Eyes';
        const isSpecialType = ! colorItem.id.indexOf('brown_') && type !== '03';
        const isDoubleColor = colorItem.id.indexOf('_') !== -1;

        const file = colorItem.files[0];
        let color1 = isEyes ? isSpecialType ? file.svgColors[2] : file.svgColors[2] : file.svgColors[0];
        let color2 = isEyes ? isSpecialType ? file.svgColors[3] : file.svgColors[5] : file.svgColors[1];
        let borderColor = file.svgColors[file.svgColors.length - 1];

        let color = [color1, color2, borderColor];

        if (colorItem.id === 'black_pink') {
          color = ['#36516e', '#f93b58', 0];
        }

        if (colorItem.id === 'pink_black') {
          color = ['#f93b58', '#36516e', 1];
        }

        if (colorItem.id === 'white_blue') {
          color = ['#45c0e9', '#efefef', 0];
        }

        if (colorItem.id === 'blue_white') {
          color = ['#45c0e9', '#efefef', 1];
        }

        if (colorItem.id === 'beige_black') {
          color = ['#eadaca', '#433947', 1];
        }

        if (colorItem.id === 'black_white') {
          color = ['#433947', '#efefef', 0];
        }

        return (
          <Link key={colorItem.id}
            to={`${urlPrefix}${colorItem.id}`}
            style={getStyles(color, isActive, isDoubleColor)}
            className={className} activeClassName="active"
            onClick={() => onClick(colorItem.id)}
          >
          </Link>
        );
      })}
    </div>
  );
}

export default ColorPicker;
