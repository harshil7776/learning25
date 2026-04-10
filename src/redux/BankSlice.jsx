import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const bankSlice = createSlice({

    name: "bank",
    initialState: {

        balance: 10000

    },
    reducers: {
        depositeAction: (state, action) => {

            console.log("Action : ", action)
            state.balance = state.balance + action.payload

        },
        withdrawAction: (state, action) => {
            console.log("Actions :", action)
            state.balance = state.balance - action.payload
        }
    }
})

export const { depositeAction, withdrawAction } = bankSlice.actions
export default bankSlice.reducer
