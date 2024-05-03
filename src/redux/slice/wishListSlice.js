/** @format */

// wishListSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlistItems: [],
  wishlistQuantity: 0,
  wishlistTotalAmount: 0,
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist: (state, actions) => {
      const newItem = actions.payload
      const existingItem = state.wishlistItems.find(
        (item) => item.id === newItem.id
      )

      if (!existingItem) {
        state.wishlistItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          category: newItem.category,
        })
        state.wishlistQuantity++
        state.wishlistTotalAmount += Number(newItem.price)
      }
    },

    deleteItemFromWishlist: (state, actions) => {
      const id = actions.payload
      const existingItem = state.wishlistItems.find((item) => item.id === id)

      if (existingItem) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== id
        )
        state.wishlistQuantity--
        state.wishlistTotalAmount -= Number(existingItem.price)
      }
    },
  },
})

export const wishlistActions = wishlistSlice.actions

export default wishlistSlice.reducer
