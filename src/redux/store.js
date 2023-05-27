import { configureStore } from "@reduxjs/toolkit";
import userObjReducer from "./userSlice";
import productReducer from "./productSlice";
import userAuthReducer from "./userAuthSlice";
import userCartReducer from "./userCartSlice";

export default configureStore({
    reducer: {
        userObj: userObjReducer,
        productData: productReducer,
        userAuth: userAuthReducer,
        userCart: userCartReducer
    }
});
