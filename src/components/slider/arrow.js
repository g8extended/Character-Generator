import React from 'react';
import LinkToAsset from './LinkToAsset';
import ArrowImage from './ArrowImage';

const Arrow = (
  ({ type }) => {
    const url = `/i/arrow_${type}.svg`;
    const offset = type !== 'left' ? 1 : -1;

    return (
      <div className={`arrow ${type}`}>
        <div className="character-wrapper">
          <div className="character">
            <LinkToAsset offset={offset} apply={true}>
              <ArrowImage type={type} />
            </LinkToAsset>
          </div>
        </div>
      </div>
    );  
  }
);

export default Arrow;
