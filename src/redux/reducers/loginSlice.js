import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:'login',
    initialState:{
        auth:true,
        logindetail:{
            email:'',
            password:''
        }
    },
    reducers:{
        update:(state,action)=>{
            state.logindetail=action.payload
    }
    }
})
export const { update } = loginSlice.actions;
export default loginSlice.reducer