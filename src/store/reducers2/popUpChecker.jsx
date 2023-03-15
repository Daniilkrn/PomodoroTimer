import { createSlice } from '@reduxjs/toolkit'


export const popUpChecker = createSlice({
  name: 'sessions',
  initialState: { 
    checked: false,
    modalSettingFromTimer: false,
    clickedFlag: false,
  },
  reducers: {
    setPopUp(state,action){
      state.checked = action.payload
    },
    setModalSettingFromTimer(state,action){
      state.modalSettingFromTimer = action.payload
    },
    setClickedFlag(state,action){
      state.clickedFlag = action.payload
    }
  },
})

export default popUpChecker.reducer

export const { setPopUp, setModalSettingFromTimer, setClickedFlag } = popUpChecker.actions
