import { createSlice } from "@reduxjs/toolkit";

export const userObjSlice = createSlice({
    name: "userObject",
    initialState: {
        age: 18,
        name: 'himanshu',
        address: 'ashok nagar'
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload || 'hello';
        },
        updateAge: (state) => {
            state.age = 28;
        },
        updateAddress: (state) => {
            state.address = 'new address';
        },
        updateAll: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

// Action creators are generated for each case reducer function
export const { updateName, updateAge, updateAddress, updateAll } = userObjSlice.actions;

export default userObjSlice.reducer;
