import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import App from './App';
import Assets from './Assets';
import Payment from './Payment';
import { setRouter } from '../actions/assets';

export default connect()(
  ({ dispatch, history }) => (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/assets" />
        <Route path="assets" component={Assets}>
          <IndexRedirect to="/assets/Hairstyles" />
          <Route path=":asset" component={Assets} onEnter={route => dispatch(setRouter(route.params.asset, null, null))}>
            <Route path=":type" component={Assets} onEnter={route => dispatch(setRouter(route.params.asset, route.params.type, null))}>
              <Route path=":color" component={Assets} onEnter={route => dispatch(setRouter(route.params.asset, route.params.type, route.params.color))}>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="payment" component={Payment} onEnter={route => dispatch(setRouter('Hairstyles', null, null))} />
      </Route>
    </Router>
  )
);
