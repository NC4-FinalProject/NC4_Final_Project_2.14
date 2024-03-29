import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reviewSlice from '../slices/ReviewSlice';
import userSlice from '../slices/userSlice';
import CommunitySlice from '../slices/CommunitySlice';
import travelSlice from "../slices/travelSlice";

const persistConfig = {
    key: 'root',
    storage: storageSession,
};

const reducers = combineReducers({
    review: reviewSlice,
    userSlice: userSlice,
    CommunitySlice: CommunitySlice,
    travelSlice: travelSlice
});

const persistreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});
  
