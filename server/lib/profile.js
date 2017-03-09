import { FETCH_ASSETS_FULFILLED } from '../../src/constants/assets';
import assetsReducer from '../../src/reducers/assets';
import map from 'lodash/map';
import keyBy from 'lodash/keyBy';
import atob from 'atob';
import { getFile } from '../../src/utils/files';
import path from 'path';
import fs from 'fs';
import md5 from 'md5';
import svg2png from 'svg2png';
import Zip from 'node-zip';

export const generateSVG = (profileEncoded, payload) => {
  const profile = keyBy(JSON.parse(atob(profileEncoded)), 'asset');
  const assets = assetsReducer({}, {
    type: FETCH_ASSETS_FULFILLED,
    payload
  });

  const items = map(assets.items);
  items.sort((a, b) => a.sortOrder - b.sortOrder);
  const files = map(items, assetItem => getFile(assetItem, profile, assets)).filter(Boolean);
  const resized = files.reduce((memo, file) => ({
    width: Math.max(memo.width || 0, file.style.width + file.style.left),
    height: Math.max(memo.height || 0, file.style.height + file.style.top),
    left: Math.min(memo.left || Infinity, file.style.left),
    top: Math.min(memo.top || Infinity, file.style.top)
  }), {});
  const resizedFiles = files.map(file => ({
    ...file,
    style: {
      ...file.style,
      left: file.style.left - resized.left,
      top: file.style.top - resized.top
    }
  }));
  const viewBoxWidth = resized.width - resized.left;
  const viewBoxHeight = resized.height - resized.top;
  const svgs = resizedFiles.map((file, index) => fs.readFileSync(path.join('public', file.src), 'utf-8').replace('<?xml version="1.0" encoding="utf-8"?>', '').replace(/viewBox="[^"]+"\s/, '').replace(/(st\d+)/g, 'file' + index + '\$1').replace('x="0px"', `x="${file.style.left}"`).replace('y="0px"', `y="${file.style.top}"`));
  const svgContent = [
    '<?xml version="1.0" encoding="utf-8"?>',
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" xml:space="preserve">`
  ].concat(svgs).concat(['</svg>']).join('\n');
  const pngContent = svg2png.sync(svgContent, { width: viewBoxWidth, height: viewBoxHeight });
  const zip = new Zip();
  zip.file('character.svg', svgContent);
  zip.file('character.png', pngContent);
  const data = zip.generate({ base64: false, compression: 'DEFLATE' });
  const zipFile = `public/files/${md5(svgContent)}.zip`;
  fs.writeFileSync(zipFile, data, 'binary');
  return zipFile;
};
