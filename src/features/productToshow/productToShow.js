import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: {} // Define una propiedad inicial para el producto
}

const productToShow = createSlice({
  name: 'productToShow',
  initialState,
  reducers: {
    setProductToShow: (state, action) => {
      state.product = action.payload // Actualiza el estado de forma segura
    }
  }
});

export const { setProductToShow } = productToShow.actions

export default productToShow.reducer
