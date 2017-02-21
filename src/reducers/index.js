import { combineReducers } from 'redux';
import headerNav from './headerNav';
import assets from './assets';
import profile from './profile';

const rootReducer = combineReducers({
  headerNav,
  assets,
  profile
});

export default rootReducer;