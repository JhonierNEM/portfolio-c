import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
    name:"app",
    initialState:{
        viewNav : true
    },
    reducers:{
        setViewNav: (state, action)=> {
            state.viewNav = action.payload
        }
    }
})

export const appRs = app.reducer
export const {setViewNav} = app.actions