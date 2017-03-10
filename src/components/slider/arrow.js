import React from 'react';
import LinkToAsset from './LinkToAsset';
import classNames from 'classnames';

const Arrow = (
  ({ type }) => {
    const url = `/i/arrow_${type}.svg`;
    const offset = type !== 'left' ? 1 : -1;
    const classeName = classNames('arrow', {
      left:  type === 'left',
      right: type === 'right'
    });

    return (
      <LinkToAsset className={classeName} offset={offset} apply={true}>
        <img src={url} />
      </LinkToAsset>
    );  
  }
);

export default Arrow;

