import App from './App';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: App },
  childRoutes: [
    { path: '*', component: App }
  ]
};

export default routes;
