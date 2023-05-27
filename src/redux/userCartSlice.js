import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

/*----------------*/
export const placeNewOrder = createAsyncThunk('placeNewOrder', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_USER}v1/place-new-order`, data, {
            headers: {
                'Content-Type': 'application/json',
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
export const userCartSlice = createSlice({
    name: "userAuthState",
    initialState: {
        loading: false,
        cartData: (localStorage.getItem('yumUserCart')) ? JSON.parse(localStorage.getItem('yumUserCart')) : [],
        cartCount: (localStorage.getItem('yumUserCart')) ? JSON.parse(localStorage.getItem('yumUserCart')).length : 0,
        error: '',
        successMsg: ''
    },
    reducers: {
        addToCart: (state, action) => {
            const itemObj = { ...action.payload };
            const chkItem = state.cartData.findIndex(a => a._id === itemObj._id);
            if (chkItem > -1) {
                state.cartData[chkItem].qty += 1;
            } else {
                itemObj.qty = 1;
                state.cartData.push(itemObj);
                state.cartCount = state.cartData.length;
            }
            localStorage.setItem('yumUserCart', JSON.stringify(state.cartData));
        },
        removeFromCart: (state, action) => {
            const itemObj = { ...action.payload };
            const chkItem = state.cartData.findIndex(a => a._id === itemObj._id);
            if (chkItem > -1) {
                if (state.cartData[chkItem].qty > 1) {
                    state.cartData[chkItem].qty -= 1;
                } else {
                    state.cartData = state.cartData.filter(a => a._id !== itemObj._id)
                    state.cartCount = state.cartData.length;
                }
                localStorage.setItem('yumUserCart', JSON.stringify(state.cartData));
            }
        },
        removeItemFromCart: (state, action) => {
            const itemObj = { ...action.payload };
            const chkItem = state.cartData.findIndex(a => a._id === itemObj._id);
            if (chkItem > -1) {
                state.cartData = state.cartData.filter(a => a._id !== itemObj._id)
                state.cartCount = state.cartData.length;
                localStorage.setItem('yumUserCart', JSON.stringify(state.cartData));
            }
        },
        clearCart: (state) => {
            state.cartData = [];
            state.cartCount = 0;
            localStorage.removeItem('yumUserCart');
        },
        clearError: (state) => {
            state.error = '';
            state.successMsg = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(placeNewOrder.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(placeNewOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.cartData = [];
            state.successMsg = action.payload.message;
        })
        builder.addCase(placeNewOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || action.error?.message;
            state.successMsg = '';
        })
    },
});

export const { addToCart, removeFromCart, removeItemFromCart, clearCart, clearError } = userCartSlice.actions;

export default userCartSlice.reducer;
