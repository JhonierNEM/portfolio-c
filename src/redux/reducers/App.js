import { information } from "../../information/english";
import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
    name:"app",
    initialState:{
        viewNav : true,
        information: {...information}
    },
    reducers:{
        setViewNav: (state, action)=> {
            state.viewNav = action.payload
        },
        setInformation: (state, action)=>{
            state.information = action.payload
        }
    }
})

export const appRs = app.reducer
export const {setViewNav,setInformation} = app.actions
