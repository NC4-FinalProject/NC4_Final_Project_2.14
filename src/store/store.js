import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reviewSlice from '../slices/ReviewSlice';
import userSlice from '../slices/userSlice';


const persistConfig = {
    key: 'root',
    storage: storageSession,
  };
  
  const rootReducer = combineReducers({
    review: reviewSlice,
    userSlice: userSlice
  });
  
  const persistreducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });
  
