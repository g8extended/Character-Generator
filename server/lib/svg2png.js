import path from 'path';
import fs from 'fs';
import { getViewBoxDimensions } from './files';

const walkSync = function(dir) {
  const isDirectory = dir => file => fs.statSync(path.join(dir, file)).isDirectory();
  const filter = dir => file => file.match(/\.svg$/) || isDirectory(dir)(file);
  return fs.readdirSync(dir).filter(filter(dir)).map(function(file) {
    if (isDirectory(dir)(file)) {
      console.log('mkdir', path.join(dir, file).replace('svg', 'png'));
      walkSync(path.join(dir, file));
    } else {
      const svg2png = './node_modules/svg2png/bin/svg2png-cli.js';
      const svg = path.join(dir, file);
      const png = svg.replace(/svg/g, 'png');
      const dim = getViewBoxDimensions(dir)(file);
      console.log(`rm -rf ${png}`);
      console.log(`${svg2png} ${svg} --output=${png} --width=${dim.width} --height=${dim.height}`);
    }
  });
};
console.log('mkdir public/png/');
walkSync('public/svg/');
