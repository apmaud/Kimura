import { configureStore } from "@reduxjs/toolkit"
import authReducer from './components/redux/auth/authSlice'
import alertsReducer from './components/redux/alerts/alertsSlice'
import { authApi } from "./components/redux/auth/authService"

const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertsReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware),
})

//     [authApi.reducerPath]: authApi.reducer,
export default store
