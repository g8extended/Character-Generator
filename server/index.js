import webpack from 'webpack';
import express from 'express';
import fs from 'fs';
import config from '../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers';
import { getFiles } from './lib/files';
import { fetchAssetsFulfilled } from '../src/actions/assets';
import Router from '../src/components/Router';
import bodyParser from 'body-parser';
import { generateSVG } from './lib/profile';

const app = express();
const compiler = webpack(config);

const port = 3000;
const trustedUri = `localhost:${port}`;

if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('public'));

app.use(bodyParser.json());

const files = getFiles();

const securityMidleware = (req, res, next) => {
  /**
   * надо понадежнее закрыть данные для скачек
   */
  if ([trustedUri, 'char.soryan.me'].includes(req.headers.host)) {
    next();
  }
}

app.post('/api/profile/', securityMidleware, function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    url: generateSVG(req.body.profile, files)
  }));
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
app.use(['/:assets?/:asset?/:type?/:color?'], (req, res) => {
  const memoryHistory = createMemoryHistory(req.originalUrl);

  let midleware = [thunk, routerMiddleware(memoryHistory)];

  if (process.env.NODE_ENV !== 'production') {
    midleware = [
      ...midleware,
      store => next => action => console.log(action) || next(action)
    ];
  }

  // Create a new Redux store instance
  const store = createStore(rootReducer, applyMiddleware(...midleware));

  const history = syncHistoryWithStore(memoryHistory, store);

  store.dispatch(fetchAssetsFulfilled(files));

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <Router history={history} />
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
