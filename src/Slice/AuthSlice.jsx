import { createSlice } from "@reduxjs/toolkit";
const initialState={
          isAuthetication:false
}

const authSlice=createSlice({
     name:"auth",
     initialState,
     reducers:{
        login(state){
           state.isAuthetication=true,
           localStorage.setItem('isAuthetication','true')
        },
        logout(state){
            state.isAuthetication=false
            localStorage.removeItem('isAuthetication')
        },
        checkAuth(state){
          state.isAuthetication =localStorage.getItem('isAuthetication')===true;
        }
     }
})
export const {login,logout,checkAuth} =authSlice.actions

export default authSlice.reducer;