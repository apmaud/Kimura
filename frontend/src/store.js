import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./components/slices/authSlice.js"

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export default store
