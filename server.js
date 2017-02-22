var path = require('path');
var webpack = require('webpack');
var express = require('express');
var fs = require('fs');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

app.get('/api/assets/', function (req, res) {
  const svgPath = 'public/svg/';
  const svgFolders = [
    {
      id: 'Beards',
      sortOrder: 4
    },
    {
      id: 'Body',
      sortOrder: 0
    },
    {
      id: 'Glasses',
      sortOrder: 1
    },
    {
      id: 'Hairstyles',
      sortOrder: 1
    },
    {
      id: 'Scarfes',
      sortOrder: 3
    },
    {
      id: 'Shirts',
      sortOrder: 1
    },
    {
      id: 'Tie',
      sortOrder: 2
    }
  ];
  const data = svgFolders.map(folder => Object.assign({}, folder,
    { files: fs.readdirSync(path.join(svgPath, folder.id)) }
  ));
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
