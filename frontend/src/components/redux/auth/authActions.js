import axios from 'axios'
import { createAsyncThunk, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

// Settings
const baseURL = 'http://localhost:5209'
axios.defaults.withCredentials = true;
const config = {
    headers: {
      "Content-type": "application/json",
    },
};
const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

// Helper functions
const setCookies = async (data) => {
    return await axios
        .post(`${baseURL}/login?useCookies=true&useSessionCookies=true`, JSON.stringify(data), config)
        .catch(error => console.log(error));
}
const setUserInfo = async () => {
    const { data } = await axios
                            .get(`${baseURL}/api/User/userinfo`, { withCredentials: true }, config)
                            .catch(error => console.log(error));
    console.log(data);
    return data;
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data) => {
        try {
            await axios.post(
                `${baseURL}/register`,
                JSON.stringify(data), 
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return isRejectedWithValue(error.response.data.message)
            } else {
                return isRejectedWithValue(error.message)
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data) => {
        try {
            const result = await setCookies(data).then(() => setUserInfo());
            return result;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return isRejectedWithValue(error.response.data.message)
            } else {
                return isRejectedWithValue(error.message)
            }
        }
    }
)

