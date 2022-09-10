import { createSlice } from '@reduxjs/toolkit'

export const ToggleModelsReducer = createSlice({
  name: 'iState',
  initialState: {
    showLoginModel: false,
    showRegisterModel: false,
  },
  reducers: {
    toggleLogin: state => {
      state.showLoginModel = !state.showLoginModel
      state.showRegisterModel = false
    },
    toggleRegister: state => {
      state.showLoginModel = false
      state.showRegisterModel = !state.showRegisterModel
    },
  },
})

export const { toggleLogin, toggleRegister } = ToggleModelsReducer.actions

export default ToggleModelsReducer.reducer
