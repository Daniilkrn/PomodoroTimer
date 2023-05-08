import sessionReducers from "./reducers2/sessionSlice";
import autoPlaySettings from "./reducers2/autoPlaySettings";
import popUpChecker from "./reducers2/popUpChecker";
import musicTimerDepend from "./reducers2/musicTimerDepend";
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {  persistStore, 
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage' 


const rootReducer = combineReducers({
  sessions: sessionReducers,
  autoPlay: autoPlaySettings,
  popUp2: popUpChecker,
  musicDependencies: musicTimerDepend,
})

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['setterLongTImer']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)
export default store
