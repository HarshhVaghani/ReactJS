import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from '../features/students/studentSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    auth: authReducer,
  },
})
