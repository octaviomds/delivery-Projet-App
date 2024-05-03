/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  totleAmount: 0,
  totalQuantity: 0,
}

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, actions) => {
      const newItem = actions.payload
      const existingsItem = state.cartItem.find(
        (item) => item.id === newItem.id
      )
      state.totalQuantity++
      if (!existingsItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totelPrice: newItem.totelPrice,
          category: newItem.category,
        })
      } else {
        existingsItem.quantity++
        existingsItem.totelPrice =
          Number(existingsItem.totelPrice) + Number(newItem.price)
      }
      state.totleAmount = state.cartItem.reduce(
        (totle, item) => totle + Number(item.price) * Number(item.quantity),
        0
      )
    },

    deleteItem: (state, actions) => {
      const id = actions.payload
      const existingsItem = state.cartItem.find((item) => item.id === id)
      if (existingsItem) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id)
        state.totalQuantity = state.totalQuantity - existingsItem.quantity
      }
      state.totleAmount = state.cartItem.reduce(
        (totle, item) => totle + Number(item.price) * Number(item.quantity),
        0
      )
    },
  },
})

export const cartActions = cardSlice.actions

export default cardSlice.reducer
