import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

/*----------------*/
export const userSignUp = createAsyncThunk('userSignUp', async (data, { rejectWithValue }) => {
    try {
        data.userMainRoles = '1';
        data.userSubRoles = '1.1';
        const response = await axios.post(`${import.meta.env.VITE_API_USER}v1/user-signup`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const userSignIn = createAsyncThunk('userSignIn', async (data, { rejectWithValue }) => {
    try {
        data.deviceId = 'xyz';
        const response = await axios.post(`${import.meta.env.VITE_API_USER}v1/user-signin`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const fetchUserProfile = createAsyncThunk('fetchUserProfile', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_USER}v1/get-user-profile`, {
            headers: {
                'Authorization': localStorage.getItem('yumUserToken')
            }
        });
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

/*----------------*/
export const userAuthSlice = createSlice({
    name: "userAuthState",
    initialState: {
        loading: false,
        isLoggedIn: localStorage.getItem('yumUserToken') || false,
        userProfile: (localStorage.getItem('yumUserProfile')) ? JSON.parse(localStorage.getItem('yumUserProfile')) : {},
        authToken: localStorage.getItem('yumUserToken') || null,
        error: '',
        msg: ''
    },
    reducers: {
        clearError: (state) => {
            state.error = '';
            state.msg = '';
        },
        userLogout: (state) => {
            state.userProfile = {};
            state.authToken = null;
            state.isLoggedIn = false;
            localStorage.removeItem('yumUserToken');
            localStorage.removeItem('yumUserProfile');
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userSignUp.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(userSignUp.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.msg = action.payload.message;
        })
        builder.addCase(userSignUp.rejected, (state, action) => {
            state.loading = false;
            state.mainCategoryData = [];
            state.error = action.payload?.message || action.error?.message;
            state.msg = '';
        })
        /*---------------*/
        builder.addCase(userSignIn.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(userSignIn.fulfilled, (state, action) => {
            state.loading = false;
            state.userProfile = action.payload.payload.userProfile;
            state.isLoggedIn = true;
            state.authToken = action.payload.payload.userToken;
            state.error = '';
            localStorage.setItem('yumUserToken', action.payload.payload.userToken);
            localStorage.setItem('yumUserProfile', JSON.stringify(action.payload.payload.userProfile));
        })
        builder.addCase(userSignIn.rejected, (state, action) => {
            state.loading = false;
            state.userProfile = {};
            state.authToken = null;
            state.isLoggedIn = false;
            state.error = action.payload?.message || action.error?.message;
        })
        /*---------------*/
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProductData = action.payload.payload.productDetail;
            state.error = '';
        })
        builder.addCase(fetchUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.singleProductData = {};
            state.error = action.payload?.message || action.error?.message;
        })
    },
});

export const { userLogout, clearError } = userAuthSlice.actions;

export default userAuthSlice.reducer;
