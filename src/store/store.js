import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reviewSlice from '../slices/ReviewSlice';
import userSlice from '../slices/userSlice';

const reducers = combineReducers({
    review: reviewSlice,
    userSlice : userSlice
});


const persistConfig = {
    key: 'root',
    storage: storageSession
};

const persistreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});