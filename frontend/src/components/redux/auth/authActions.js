import axios from 'axios'
import { createAsyncThunk, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'
import { addAlert } from '../alerts/alertsSlice';


// Settings
const baseURL = 'http://localhost:5209'
axios.defaults.withCredentials = true;
const config = {
    headers: {
      "Content-type": "application/json",
    },
};

// Helper functions
const setCookies = async (data) => {
    return await axios
        .post(`${baseURL}/login?useCookies=true&useSessionCookies=true`, JSON.stringify(data), config);
}
const setUserInfo = async () => {
    const { data } = await axios
                            .get(`${baseURL}/api/User/userinfo`, { withCredentials: true }, config);
    return data;
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data, { dispatch, rejectWithValue}) => {
        try {
            await axios.post(
                `${baseURL}/register`,
                JSON.stringify(data), 
                config
            )
            dispatch(
                addAlert({
                message: "Registration successful!",
                severity: "success",
                id: Date.now(),
            }));
        } catch (error) {
            console.error('Error during registration:', error);
            dispatch(
                addAlert({
                message: error.response?.data?.message || error.message || "An error occurred.",
                severity: "error",
                id: Date.now(),
            }));
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data, { dispatch, rejectWithValue}) => {
        try {
            const result = await setCookies(data).then(() => setUserInfo());
            dispatch(
                addAlert({
                message: "Login successful!",
                severity: "success",
                id: Date.now(),
            }));
            console.log(result)
            return result;

        } catch (error) {
            console.error('Error during login:', error);
            dispatch(
                addAlert({
                message: error.response?.data?.message || error.message || "An error occurred.",
                severity: "error",
                id: Date.now(),
            }));
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

