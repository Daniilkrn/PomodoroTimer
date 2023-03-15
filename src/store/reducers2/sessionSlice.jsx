import { createSlice } from '@reduxjs/toolkit'

export const sessionReducers = createSlice({
  name: 'sessions',
  initialState: {
    countDefaultSession: 25,
    countDefaultBrake: 2,
    countDefaultLongTimer: 20,
    flag: false,
    setterLongTImer: 4,
    flagToSettingLT: false,
  },
  reducers: {
    setDefaultSession(state,action){
      state.countDefaultSession = action.payload
    },
    setFlag(state,action){
      state.flag = action.payload
    },
    setDefaultBrake(state,action){
      state.countDefaultBrake = action.payload
    },
    setDefaultLongTimer(state,action){
      state.countDefaultLongTimer = action.payload
    },
    setSetterLongTImer(state,action){
      state.setterLongTImer = action.payload
    },
    setflagToSettingLT(state,action){
      state.flagToSettingLT = action.payload
    }
  },
})

export default sessionReducers.reducer

export const { setDefaultSession, setFlag, setDefaultBrake, setDefaultLongTimer, setSetterLongTImer, setflagToSettingLT} = sessionReducers.actions

