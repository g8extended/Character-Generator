import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';

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

        if (colorItem.id === 'black_pink') {
          color1 = '#36516e';
          color2 = '#f93b58';
          borderColor = color1;
        }

        if (colorItem.id === 'pink_black') {
          color1 = '#f93b58';
          color2 = '#36516e';
          borderColor = color2;
        }

        if (colorItem.id === 'white_blue') {
          color1 = '#45c0e9';
          color2 = '#efefef';
          borderColor = color1;
        }

        if (colorItem.id === 'blue_white') {
          color1 = '#45c0e9';
          color2 = '#efefef';
          borderColor = color2;
        }

        if (colorItem.id === 'beige_black') {
          color1 = '#eadaca';
          color2 = '#433947';
          borderColor = color2;
        }

        if (colorItem.id === 'black_white') {
          color1 = '#433947';
          color2 = '#efefef';
          borderColor = color1;
        }

        const style = {
          background: isDoubleColor ? `linear-gradient(to right, ${color1} 0%, ${color1} 50%, ${color2} 50%, ${color2} 100%)` : undefined,
          backgroundColor: isDoubleColor ? undefined : color2,
          borderColor: isActive ? borderColor : undefined
        };

        return (
          <Link key={colorItem.id}
            to={`${urlPrefix}${colorItem.id}`}
            style={style}
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
