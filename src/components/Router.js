import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import App from './App';
import Success from './Success';
import Assets from './Assets';
import { setRouter } from '../actions/assets';

export default connect()(
  ({ dispatch, history }) => (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/assets" />
        <Route path="thank_you" component={Success} />
        <Route path="assets" component={Assets}>
          <IndexRedirect to="/assets/Hairstyles" />
          <Route path=":asset" component={Assets} onEnter={route => dispatch(setRouter(route.params.asset))}>
            <Route path=":type" component={Assets} onEnter={route => dispatch(setRouter(route.params.asset, route.params.type))}>
              <Route path=":color" component={Assets} onEnter={route => dispatch(setRouter(route.params.asset, route.params.type, route.params.color))}>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  )
);
