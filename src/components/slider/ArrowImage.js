import React from 'react';

const ArrowImage = (
  ({ type, file }) => {
    const url = `/i/arrow_${type}.svg`;

    return (
      <img src={url} style={{
        top: parseFloat(file.computedStyle.top) + parseFloat(file.computedStyle.height) / 2 + '%'
      }} />
    );  
  }
);

export default ArrowImage;
