import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import timerReducer from './timerReducer';
import stepReducer from './stepReducer';

const rootReducer = combineReducers({
  value: timerReducer,
  step: stepReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
