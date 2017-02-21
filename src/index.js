import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import { fetchAssets } from './actions/assets';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchAssets());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
