import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import App from './App';
import { setCurrentAsset, setCurrentColor } from './actions/assets';

export default connect()(
  ({ dispatch, history }) => (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/assets" />
        <Route path="assets" component={App}>
          <IndexRedirect to="/assets/Hairstyles" />
          <Route path=":assetID" component={App} onEnter={route => dispatch(setCurrentAsset(route.params.assetID))}>
            <Route path=":color" component={App} onEnter={route => dispatch(setCurrentColor(route.params.color))}>
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  )
);
