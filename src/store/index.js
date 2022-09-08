import { configureStore } from "@reduxjs/toolkit";
import products from './slices/Products.slice'

export default configureStore({
    reducer: {
        products
    }
})