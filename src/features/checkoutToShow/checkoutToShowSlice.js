import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const checkoutToShowSlice = createSlice({
  name: 'checkoutToShow',
  initialState,
  reducers: {
    setShowCheckout: (state) => !state,
    setCloseCheckout: (state) => state = false,
    setOpenCheckout: (state) => state = true,
  }
});

export const {setShowCheckout, setCloseCheckout, setOpenCheckout} = checkoutToShowSlice.actions

export default checkoutToShowSlice.reducer