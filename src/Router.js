import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import App from './App';
import { setCurrentAsset, setCurrentColor, setCurrentSubColor } from './actions/assets';

export default connect()(
  ({ dispatch, history }) => (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/assets" />
        <Route path="assets" component={App}>
          <IndexRedirect to="/assets/Hairstyles" />
          <Route path=":assetID" component={App} onEnter={route => dispatch(setCurrentAsset(route.params.assetID))}>
            <Route path=":color" component={App} onEnter={route => dispatch(setCurrentColor(route.params.color))}>
              <Route path=":subColor" component={App} onEnter={route => dispatch(setCurrentSubColor(route.params.subColor))}>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  )
);
