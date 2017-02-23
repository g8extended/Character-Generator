var path = require('path');
var webpack = require('webpack');
var express = require('express');
var fs = require('fs');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var trustedUri = 'localhost:3000';

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

app.get('/api/assets/', function(req, res, next) {
  /**
   * надо понадежнее закрыть данные для скачек
   */
  if (req.headers.host === trustedUri) {
    next();
  }
}, function (req, res) {
  const svgPath = 'public/svg/';
  const svgFolders = require('./data/assets');
  const data = svgFolders.map(folder => {
    const colors = folder.colors.map(color => {
      return Object.assign({}, color, {
        files: fs.readdirSync(path.join(svgPath, folder.id, color.id))
      });
    });

    return Object.assign({}, folder, {
      colors
    });
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://' + trustedUri + '/');
});
