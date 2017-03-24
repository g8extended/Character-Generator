import React from 'react';

const AssetImage = (
  ({ file }) => (
    <img src={file.src} style={file.computedStyle} onContextMenu={e => e.preventDefault()} />
  )
);

export default AssetImage;
