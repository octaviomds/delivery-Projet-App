'use client'

import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './slice/cartSlice'
import wishListSlice from './slice/wishListSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishListSlice,
  },
})

export default store
