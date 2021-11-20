import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

// Imports: Redux
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

// Middleware: Redux Persist Config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
