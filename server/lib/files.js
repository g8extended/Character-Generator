import path from 'path';
import fs from 'fs';

const getViewBoxDimensions = dir => file => {
  const fileContent = fs.readFileSync(path.join(dir, file), 'utf-8');
  const matches = fileContent.match(/viewBox=\"(\d+(?:\.\d+)?) (\d+(?:\.\d+)?) (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)\"/);
  if ( ! matches) return;
  return {
    width: parseFloat(matches[3]),
    height: parseFloat(matches[4])
  }
};

const getColors = dir => file => {
  const fileContent = fs.readFileSync(path.join(dir, file), 'utf-8');
  const matches = fileContent.match(/#[A-Za-z0-9]{6}/g);
  if ( ! matches) return;
  return matches;
};

const walkSync = function(dir) {
  const isDirectory = dir => file => fs.statSync(path.join(dir, file)).isDirectory();
  const filter = dir => file => file.match(/\.svg$/) || isDirectory(dir)(file);
  return fs.readdirSync(dir).filter(filter(dir)).map(function(file) {
    if (isDirectory(dir)(file)) {
      return {
        id: file,
        items: walkSync(path.join(dir, file))
      };
    } else {
      return {
        id: file,
        style: getViewBoxDimensions(dir)(file),
        svgColors: getColors(dir)(file)
      };
    }
  });
};

export const getFiles = () => {
  return walkSync('public/svg/');
};
