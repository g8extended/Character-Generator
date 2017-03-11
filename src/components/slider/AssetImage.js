import React from 'react';

const AssetImage = (
  ({ file }) => (
    <img src={file.src} style={file.computedStyle} />
  )
);

export default AssetImage;
