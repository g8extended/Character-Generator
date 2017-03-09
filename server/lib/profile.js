import { FETCH_ASSETS_FULFILLED } from '../../src/constants/assets';
import assetsReducer from '../../src/reducers/assets';
import map from 'lodash/map';
import keyBy from 'lodash/keyBy';
import atob from 'atob';
import { getFile } from '../../src/utils/files';
import path from 'path';
import fs from 'fs';
import md5 from 'md5';

export const generateSVG = (profileEncoded, payload) => {
  const profile = keyBy(JSON.parse(atob(profileEncoded)), 'asset');
  const assets = assetsReducer({}, {
    type: FETCH_ASSETS_FULFILLED,
    payload
  });

  const items = map(assets.items);
  items.sort((a, b) => a.sortOrder - b.sortOrder);
  const files = map(items, assetItem => getFile(assetItem, profile, assets)).filter(Boolean);
  const svgs = files.map((file, index) => fs.readFileSync(path.join('public', file.src), 'utf-8').replace('<?xml version="1.0" encoding="utf-8"?>', '').replace(/viewBox="[^"]+"\s/, '').replace(/(st\d+)/g, 'file' + index + '\$1').replace('x="0px"', `x="${file.style.left}"`).replace('y="0px"', `y="${file.style.top}"`));
  const svgContent = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 900 900" xml:space="preserve">'
  ].concat(svgs).concat(['</svg>']).join('\n');
  const name = md5(svgContent);
  const file = `files/${name}.svg`;
  fs.writeFileSync(path.join('public', file), svgContent);
  return file;
};
