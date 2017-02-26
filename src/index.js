import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import { fetchAssets } from './actions/assets';

const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    autoRehydrate()
  )
);

persistStore(store, {
  whitelist: [
    'profile'
  ]
});

const history = syncHistoryWithStore(browserHistory, store);

// store.dispatch(fetchAssets());

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="*" component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
