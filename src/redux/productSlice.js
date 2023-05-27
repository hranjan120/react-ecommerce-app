import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchMainCategory = createAsyncThunk('fetchMainCategory', async (rejectWithValue) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}v1/get-main-cat`);
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const fetchProduct = createAsyncThunk('fetchProduct', async (cat, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}v1/get-products/${cat}`);
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}v1/get-product-detail/${data.prodSlug}/${data.prodSku}`);
        return response.data;
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const productDataSlice = createSlice({
    name: "productDataState",
    initialState: {
        loading: false,
        mainCategoryData: [],
        productData: [],
        singleProductData: {},
        error: ''
    },
    reducers: {
        // standard reducer logic
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMainCategory.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchMainCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.mainCategoryData = action.payload.payload.mainCategory;
            state.error = '';
        })
        builder.addCase(fetchMainCategory.rejected, (state, action) => {
            state.loading = false;
            state.mainCategoryData = [];
            state.error = action.payload?.message || action.error?.message;
        })
        /*---------------*/
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.productData = action.payload.payload.productData;
            state.error = '';
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.productData = [];
            state.error = action.payload?.message || action.error?.message;
        })
        /*---------------*/
        builder.addCase(fetchSingleProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProductData = action.payload.payload.productDetail;
            state.error = '';
        })
        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            state.loading = false;
            state.singleProductData = {};
            state.error = action.payload?.message || action.error?.message;
        })
    },
});

export default productDataSlice.reducer;
