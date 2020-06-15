import { combineReducers } from 'redux';
import CommonDataReducer from './commonDataReducer';
import HomeDataReducer from './homeDataReducer';

const rootReducer = combineReducers({
  common: CommonDataReducer,
  home: HomeDataReducer,
});

export default rootReducer;