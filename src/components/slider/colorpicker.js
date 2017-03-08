import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import classNames from 'classnames';

const ColorPicker = ({ colors, current, urlPrefix, onClick }) => {
  if (Object.keys(colors).length < 2) return <div />;

  return (
    <div className="colorPicker">
      {map(colors, color => {
        const className = classNames('color', color.id, {
          active: current === color.id
        });

        return (
          <Link key={color.id}
            to={`${urlPrefix}${color.id}`}
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
