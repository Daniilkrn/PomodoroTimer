import { createSlice } from '@reduxjs/toolkit'

export const autoPlaySettings = createSlice({
  name: 'sessions',
  initialState: { 
    flag: true,
    flagLongTimer: false,
  },
  reducers: {
    setDefaultAutoPlay(state,action){
      state.flag = action.payload
    },
    setFlagLongTimer(state,action){
      state.flagLongTimer = action.payload
    },
  },
})

export default autoPlaySettings.reducer

export const { setDefaultAutoPlay, setFlagLongTimer} = autoPlaySettings.actions
