import React from 'react';
import LinkToAsset from './LinkToAsset';

const Arrow = (
  ({ type }) => {
    const url = `/i/arrow_${type}.svg`;
    const offset = type !== 'left' ? 1 : -1;

    return (
      <LinkToAsset className="arrow" offset={offset} apply={true}>
        <img src={url} />
      </LinkToAsset>
    );  
  }
);

export default Arrow;

