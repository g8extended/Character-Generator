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
      colors: [
        {
          id: 'blond',
        },
        {
          id: 'brown-haired person',
        },
        {
          id: 'brunet',
        },
        {
          id: 'white'
        }
      ],
      sortOrder: 4
    },
    {
      id: 'Body',
      colors: [
        {
          id: 'default',
        }
      ],
      sortOrder: 0
    },
    {
      id: 'Glasses',
      colors: [
        {
          id: 'default',
        }
      ],
      sortOrder: 1
    },
    {
      id: 'Hairstyles',
      colors: [
        {
          id: 'blond',
        },
        {
          id: 'brown-haired person',
        },
        {
          id: 'brunet',
        },
        {
          id: 'white'
        }
      ],
      sortOrder: 1
    },
    {
      id: 'Scarfes',
      colors: [
        {
          id: 'default',
        }
      ],
      sortOrder: 3
    },
    {
      id: 'Shirts',
      colors: [
        {
          id: 'default',
        }
      ],
      sortOrder: 1
    },
    {
      id: 'Tie',
      colors: [
        {
          id: 'default',
        }
      ],
      sortOrder: 2
    }
  ];
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

  console.log('Listening at http://localhost:3000/');
});
