import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState: {

        cart: []

    },
    reducer: {
        addToCart: (state, action) => {

            console.log("State...", state)
            console.log("Action...", action)
            state.cart.push(action.payload)
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer
