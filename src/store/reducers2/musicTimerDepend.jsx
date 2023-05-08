import { createSlice } from '@reduxjs/toolkit'

export const musicTimerDepend = createSlice({
  name: 'musicTimerDepend ',
  initialState: { 
    startedDefault: false,
    duration: 0,
  },
  reducers: {
    setStartedDeafult(state,action){
      state.startedDefault = action.payload
    },
    setDeafultDuration(state,action){
        state.duration = action.payload
      },
  },
})

export default musicTimerDepend.reducer

export const { setStartedDeafult, setDeafultDuration} = musicTimerDepend.actions
