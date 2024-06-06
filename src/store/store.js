import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reviewSlice from '../slices/reviewSlice';
import userSlice from '../slices/userSlice';
import communitySlice from '../slices/communitySlice';
import travelSlice from "../slices/travelSlice";
import chatSlice from "../slices/chatSlice";
import chatRoomSlice from "../slices/chatRoomSlice";
import recruitmentSlice from "../slices/recruitmentSlice";
import { thunk } from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: storageSession,
};

const reducers = combineReducers({
    review: reviewSlice,
    userSlice: userSlice,
    communitySlice: communitySlice,
    chatSlice: chatSlice,
    chatRoomSlice: chatRoomSlice,
    travel: travelSlice,
    recruitment: recruitmentSlice
});

const persistreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(thunk),
});
  
