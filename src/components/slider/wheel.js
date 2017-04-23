import React from 'react';
import classNames from 'classnames';
import reverse from 'lodash/reverse';
import LinkToAsset from './LinkToAsset';
import AssetImage from './AssetImage';

const Wheel = (
  ({ type }) => {
    const classeName = classNames('wheel', {
      left:  type === 'left',
      right: type === 'right'
    });

    const getCharacterWrapper = (type, index) => {
      const offset = (type === 'left' ? -3 : 1) + index;
      return (
        <div key={index} className="character-wrapper">
          <div key={index} className="character">
            <LinkToAsset offset={offset} apply doNotShowIfOnlyOne>
              <AssetImage />
            </LinkToAsset>
          </div>
        </div>
      );
    }

    return (
      <div className={classeName}>
        {[0, 1, 2].map((width, index) => (
          getCharacterWrapper(type, index)
        ))}
      </div>
    )
  }
);

export default Wheel;
