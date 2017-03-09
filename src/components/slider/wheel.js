import React from 'react';
import classNames from 'classnames';
import Media from 'react-media';
import reverse from 'lodash/reverse';
import LinkToAsset from './LinkToAsset';

const Wheel = (
  ({ type }) => {
    const classeName = classNames('wheel', {
      left:  type === 'left',
      right: type === 'right'
    });

    const getCharacterWrapper = (type, index) => {
      const offset = (type === 'left' ? -2 : 1) + index;
      return (
        <div key={index} className="character-wrapper">
          <div className="character">
            <LinkToAsset offset={offset} img={true} />
          </div>
        </div>
      );
    }

    const breakpoints = [1024, 1600];
    const breakpointsSorted = type === 'left' ? reverse(breakpoints) : breakpoints;

    return (
      <div className={classeName}>
        {breakpointsSorted.map((width, index) => (
          <Media key={index} query={{ minWidth: width }}>
            {matches => matches && getCharacterWrapper(type, index)}
          </Media>
        ))}
      </div>
    )
  }
);

export default Wheel;
