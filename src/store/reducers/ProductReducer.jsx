import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        
        getproducts: (state, action) => {
            state.products = action.payload;
        }
    },
})

export default productSlice.reducer;
export const { getproducts } = productSlice.actions;