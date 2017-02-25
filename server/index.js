import path from 'path';
import webpack from 'webpack';
import express from 'express';
import fs from 'fs';
import config from '../webpack.config';

const app = express();
const compiler = webpack(config);

const port = 3000;
const trustedUri = `localhost:${port}`;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/assets/', function(req, res, next) {
  /**
   * надо понадежнее закрыть данные для скачек
   */
  if (req.headers.host === trustedUri) {
    next();
  }
}, function (req, res) {
  const svgPath = './public/svg/';
  const svgFolders = require('../data/assets');
  const data = svgFolders.map(folder => {
    const colors = folder.colors.map(color => {
      return {
        ...color,
        files: fs.readdirSync(path.join(svgPath, folder.id, color.id))
      };
    });

    return {
      ...folder,
      colors
    };
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://${trustedUri}/`);
});
