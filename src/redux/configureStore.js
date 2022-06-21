import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduContinent from './continent';

const rootReducer = combineReducers({
  reduContinent,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
