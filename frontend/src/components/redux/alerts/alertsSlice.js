import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentAlerts: [],
}

const alertsSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        addAlert: (state, action) => {
            let newAlerts = [...state.currentAlerts, action.payload]
            return { ...state, currentAlerts: newAlerts }
        },
        removeAlert: (state, action) => {
            let element = state.currentAlerts.filter((e) => e.id !== action.payload.id)
            return { currentAlerts: element }
        }
    },
});

export const { addAlert, removeAlert } = alertsSlice.actions
export default alertsSlice.reducer

