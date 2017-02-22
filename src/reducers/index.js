import { combineReducers } from 'redux';
import headerNav from './headerNav';
import assets from './assets';
import assetsToHeaderNavMapping from './assetsToHeaderNavMapping';
import profile from './profile';

const rootReducer = combineReducers({
  headerNav,
  assets,
  assetsToHeaderNavMapping,
  profile
});

export default rootReducer;