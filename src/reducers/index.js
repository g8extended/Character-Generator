import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import headerNav from './headerNav';
import assets from './assets';
import profile from './profile';
import checkout from './checkout';

const rootReducer = combineReducers({
  routing: routerReducer,
  headerNav,
  assets,
  profile,
  checkout
});

export default rootReducer;
