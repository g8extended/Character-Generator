import { combineReducers } from 'redux';
import headerNav from './headerNav';
import assets from './assets';

const rootReducer = combineReducers({
  headerNav,
  assets
});

export default rootReducer;