import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store/slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})