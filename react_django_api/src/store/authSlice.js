import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.status = true,
            state.userData = action.payload.userData
        },
        logout: (state)=>{
            state.status = false,
            state.userData = null
        },
        setStatus: (state,action)=>{
            state.status = action.payload
        }
    }
})

export  const {login,logout,setStatus} = authSlice.actions
export default authSlice.reducer