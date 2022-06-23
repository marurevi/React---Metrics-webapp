import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduContinent from './continent';
import reduCountry from './country';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  reduContinent,
  reduCountry,
}));

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
);
const persistor = persistStore(store);

export default store;
export { persistor };
