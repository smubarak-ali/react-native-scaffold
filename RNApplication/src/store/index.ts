import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./reducer/authReducer";

const rootReducer = combineReducers({
    authReducer,
});

const persistConfig: PersistConfig = {
    key: 'rnapp', // the name of the db
    storage,
    blacklist: ['navigation', 'authReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export default { store, persistor }
