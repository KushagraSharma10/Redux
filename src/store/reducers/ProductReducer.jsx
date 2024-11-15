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
            axios
                .get("https://fakestoreapi.com/products")
                .then((response) => {
                    console.log(response)
                    state.products = response.data;
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
})

export default productSlice.reducer;
export const { getproducts } = productSlice.actions;