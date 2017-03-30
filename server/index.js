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
const trustedDomains = [trustedUri, 'localhost', 'character-generator.me'];
const html403 = '<div style="width:620px;height:440px;text-align: center;position: absolute;top:50%;left:50%;margin-left:-310px;margin-top:-220px;"><div><img src="/i/403.svg" /></div><div><a href="/" style="background-color: #EE3C5D;color: #fff;border-radius: 55px;font-size: .7em;text-transform: uppercase;text-decoration: none;white-space: nowrap;border: transparent;padding: 1.3em 2.1em;cursor: pointer;display: inline-block; font-family:Arial;">BACK TO GENERATOR</a></div></div>';

if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/svg/**/*.svg', (req, res, next) => {
  if ( ! trustedDomains.some(uri => req.headers.referer && req.headers.referer.indexOf(uri) !== -1)) {
    res.status(403).end(html403);
  }
  next();
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const files = getFiles();

const securityMidleware = (req, res, next) => {
  /**
   * надо понадежнее закрыть данные для скачек
   */
  if (trustedDomains.includes(req.headers.host)) {
    next();
  }
}

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS orders (email TEXT, permalink TEXT, profile TEXT, sale_id TEXT, download_url TEXT)');
});

app.post('/api/profile', securityMidleware, (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  db.serialize(() => {
    const stmt = db.prepare('INSERT INTO orders (email, permalink, profile) VALUES (?, ?, ?)');
    stmt.run(req.body.email, req.body.permalink, req.body.profile);
    stmt.finalize();
  });

  res.status(200).end();
});

app.post('/api/ping', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  db.serialize(() => {
    db.get('SELECT count(*) as count FROM orders WHERE email = ? AND permalink = ?', req.body.email, req.body.permalink, (err, row) => {
      if (row.count < 1) {
        res.status(200).end();
      }
      const index = row.count;
      db.get('SELECT rowid AS id, * FROM orders WHERE email = ? AND permalink = ? ORDER BY rowid DESC LIMIT 1', req.body.email, req.body.permalink, (err, row) => {
        const download_url = generateSVG(row, files, index);
        db.run('UPDATE orders SET sale_id = ?, download_url = ? WHERE rowid = ?', req.body.sale_id, download_url, row.id);
        res.status(200).end();
      });
    });
  });
});

app.get('/thank_you', securityMidleware, (req, res) => {
  db.serialize(() => {
    db.get('SELECT download_url FROM orders WHERE sale_id = ? LIMIT 1', req.query.sale_id, (err, row) => {
      if ( ! row) {
        res.status(403).end(html403);
        return;
      }
      res.send(`<a href="${row.download_url}">download</a>`);
    });
  });
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
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://${trustedUri}/`);
});
