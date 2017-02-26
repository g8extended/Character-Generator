import path from 'path';
import webpack from 'webpack';
import express from 'express';
import fs from 'fs';
import config from '../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers';
import { fetchAssetsFulfilled, setCurrentAsset, setCurrentColor } from '../src/actions/assets';
import App from '../src/App';

const app = express();
const compiler = webpack(config);

const port = 3000;
const trustedUri = `localhost:${port}`;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

const getAssets = () => {
  const svgPath = './public/svg/';
  const svgFolders = require('../data/assets');
  return svgFolders.map(folder => {
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
};

app.get('/api/assets/', function(req, res, next) {
  /**
   * надо понадежнее закрыть данные для скачек
   */
  if (req.headers.host === trustedUri) {
    next();
  }
}, function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(getAssets()));
});

const indexHtmlTemplate = fs.readFileSync('index.html', 'utf8');

const renderFullPage = (html, preloadedState) => (
  indexHtmlTemplate.replace('<div id="root"></div>', `<div id="root">${html}</div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
  `)
);

// This is fired every time the server side receives a request
app.use(['/assets/:assetID/:color', '/'], (req, res) => {
  // Create a new Redux store instance
  const store = createStore(rootReducer, applyMiddleware(thunk));

  store.dispatch(fetchAssetsFulfilled(getAssets()));
  req.params.assetID && store.dispatch(setCurrentAsset(req.params.assetID));
  req.params.color && store.dispatch(setCurrentColor(req.params.color));

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://${trustedUri}/`);
});
