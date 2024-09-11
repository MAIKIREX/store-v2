import { createSlice } from "@reduxjs/toolkit";
import { subTotal } from "../../utils/subTotal";

const initialState = [];

const cartSlice = createSlice({
    name: "cartProduct",
    initialState,
    reducers: {
        // Añadir un producto al carrito
        addTask: (state, action) => {
            const productExists = state.find(item => item.id === action.payload.id);
            if (productExists) {
                productExists.amount += 1; // Si ya está en el carrito, aumentar cantidad
            } else {
                state.push({ ...action.payload, amount: 1, subTotal: action.payload.price}); // Si no, añadir el producto con cantidad 1
            }
        },
        // Aumentar la cantidad de un producto
        upAmount: (state, action) => {
            const productCurrent = state.find(item => item.id === action.payload);
            if (productCurrent) {
                productCurrent.amount += 1;
                productCurrent.subTotal = productCurrent.amount * productCurrent.price
            }
        },
        // Disminuir la cantidad de un producto
        downAmount: (state, action) => {
            const productCurrent = state.find(item => item.id === action.payload);
            if (productCurrent) {
                if (productCurrent.amount > 1) {
                    productCurrent.amount -= 1;
                    productCurrent.subTotal = productCurrent.amount * productCurrent.price
                } else {
                    // Si la cantidad llega a 1 y se reduce, eliminar el producto
                    const index = state.indexOf(productCurrent);
                    if (index !== -1) state.splice(index, 1);
                }
            }
        },
        // Eliminar un producto
        deleteProduct: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) state.splice(index, 1); // Solo eliminar si el producto existe
        },
    },
});

export const { addTask, upAmount, downAmount, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
