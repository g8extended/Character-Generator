import path from 'path';
import fs from 'fs';

const walkSync = function(dir) {
  const isDirectory = dir => file => fs.statSync(path.join(dir, file)).isDirectory();
  const filter = dir => file => file.match(/\.svg$/) || isDirectory(dir)(file);
  return fs.readdirSync(dir).filter(filter(dir)).map(function(file) {
    if (isDirectory(dir)(file)) {
      return {
        id: file,
        colors: walkSync(path.join(dir, file))
      };
    } else {
      return file;
    }
  });
};

export const getFiles = () => {
  return walkSync('public/svg/');
};
