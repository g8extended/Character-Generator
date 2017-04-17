import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import App from './App';
import Success from './Success';
import Assets from './Assets';
import { setRouter } from '../actions/assets';
import ReactGA from 'react-ga';

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-97466907-1');
}

function logPageView() {
  if (typeof window !== 'undefined') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}

export default connect()(
  ({ dispatch, history }) => (
    <Router history={history} onUpdate={logPageView}>
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
