import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './App';
import { setCurrentAsset, setCurrentColor } from './actions/assets';

export default connect()(
  ({ dispatch, history }) => (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="assets" component={App}>
          <Route path=":assetID" component={App} onEnter={route => dispatch(setCurrentAsset(route.params.assetID))}>
            <Route path=":color" component={App} onEnter={route => dispatch(setCurrentColor(route.params.color))}>
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  )
);
