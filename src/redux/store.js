import { configureStore } from '@reduxjs/toolkit'
import length from './slices/Length'
import parameters from './slices/parameters'
import password from './slices/password'

export const store = configureStore({
  reducer: {
    length,
    parameters,
    password
  }
})
