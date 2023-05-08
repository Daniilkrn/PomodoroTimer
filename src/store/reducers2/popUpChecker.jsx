import { createSlice } from '@reduxjs/toolkit'

export const popUpChecker = createSlice({
  name: 'sessions',
  initialState: { 
    checked: false,
    modalSettingFromTimer: false,
    clickedFlag: false,
    clickedFlagBurger: false,
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
    },
    setClickedFlagBurger(state,action){
      state.clickedFlagBurger = action.payload
    }
  },
})

export default popUpChecker.reducer

export const { setPopUp, setModalSettingFromTimer, setClickedFlag, setClickedFlagBurger } = popUpChecker.actions
