import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Slice/slice"
import AuthReducer from "../Slice/AuthSlice"
const Store = configureStore({
    reducer:{
        todos:TodoReducer,
        auth:AuthReducer
    }
})
export default Store