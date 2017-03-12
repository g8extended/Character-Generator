import React from 'react';

const ArrowImage = (
  ({ type, file }) => {
    const url = `/i/arrow_${type}.svg`;
    const { top, height } = file.computedStyle;
    const style = {
    	top: parseFloat(top) + parseFloat(height) / 2 + '%'
    };

    return <img src={url} style={style} />;
  }
);

export default ArrowImage;
