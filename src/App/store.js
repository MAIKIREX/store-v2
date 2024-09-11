import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice"
import orderReducer from "../features/order/orderSlice"
import productToShowReducer from "../features/productToshow/productToShow"
import showDetailReducer from "../features/showDetail/showDetailSlice"

export const store = configureStore({
  reducer: {
    carts: cartReducer,
    orders: orderReducer,
    productToShow: productToShowReducer,
    showDetail: showDetailReducer
  },
})