import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import headerNav from './headerNav';
import assets from './assets';
import assetsToHeaderNavMapping from './assetsToHeaderNavMapping';
import profile from './profile';

const rootReducer = combineReducers({
  routing: routerReducer,
  headerNav,
  assets,
  assetsToHeaderNavMapping,
  profile
});

export default rootReducer;