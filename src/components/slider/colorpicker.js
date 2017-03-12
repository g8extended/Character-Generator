import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';

const ColorPicker = ({ asset, colors, current, urlPrefix, onClick }) => {
  if (Object.keys(colors).length < 2) return <div />;

  return (
    <div className="colorPicker">
      {map(colors, color => {
        const isActive = current === color.id;
        const className = classNames('color', color.id, {
          active: isActive
        });

        const file = color.files[0];
        const color1 = asset === 'Eyes' ? file.svgColors[2] : file.svgColors[0];
        const color2 = asset === 'Eyes' ? file.svgColors[5] : file.svgColors[1];
        const borderColor = file.svgColors[file.svgColors.length - 1];

        const style = {
          background: `linear-gradient(to right, ${color1} 0%, ${color1} 50%, ${color2} 50%, ${color2} 100%)`,
          borderColor: isActive ? borderColor : undefined
        };

        return (
          <Link key={color.id}
            to={`${urlPrefix}${color.id}`}
            style={style}
            className={className} activeClassName="active"
            onClick={() => onClick(color.id)}
          >
          </Link>
        );
      })}
    </div>
  );
}

export default ColorPicker;
