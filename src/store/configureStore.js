import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from '../slices/userSlice';
import storageSession from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';

const reducers = combineReducers({
    "user" : userSlice
});

const persistConfig = {
    key: 'root',
    storage: storageSession
};

const persistreducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export default store;