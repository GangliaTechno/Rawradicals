// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] // each item: { id, name, price, quantity }
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const existing = state.items.find(item => item.id === product.id)
            if (existing) {
                existing.quantity += 1
            } else {
                state.items.push({ ...product, quantity: 1 })
            }
        },
       
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
