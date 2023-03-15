
import sessionReducers from "./reducers2/sessionSlice";
import autoPlaySettings from "./reducers2/autoPlaySettings";
import popUpChecker from "./reducers2/popUpChecker";
import musicTimerDepend from "./reducers2/musicTimerDepend";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer:{
    sessions: sessionReducers,
    autoPlay: autoPlaySettings,
    popUp2: popUpChecker,
    musicDependencies: musicTimerDepend,
  }
});

