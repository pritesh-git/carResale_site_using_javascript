import { configureStore } from '@reduxjs/toolkit'
import ToggleModelsReducer from './ToggleModelsReducer'

export default configureStore({
  reducer: {
    toggleModels: ToggleModelsReducer,
  },
})
