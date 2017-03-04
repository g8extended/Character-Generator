import path from 'path';
import fs from 'fs';

const getViewBoxDimensions = dir => file => {
  const fileContent = fs.readFileSync(path.join(dir, file), 'utf-8');
  const matches = fileContent.match(/viewBox=\"0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)\"/);
  if ( ! matches) return;
  return {
    width: parseFloat(matches[1]),
    heigth: parseFloat(matches[2])
  }
};

const walkSync = function(dir) {
  const isDirectory = dir => file => fs.statSync(path.join(dir, file)).isDirectory();
  const filter = dir => file => file.match(/\.svg$/) || isDirectory(dir)(file);
  return fs.readdirSync(dir).filter(filter(dir)).map(function(file) {
    if (isDirectory(dir)(file)) {
      return {
        isFile: false,
        id: file,
        colors: walkSync(path.join(dir, file))
      };
    } else {
      return {
        isFile: true,
        id: file,
        style: getViewBoxDimensions(dir)(file)
      };
    }
  });
};

export const getFiles = () => {
  return walkSync('public/svg/');
};
