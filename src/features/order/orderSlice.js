import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const orderSlice = createSlice({
  name: 'orderPrduct',
  initialState,
  reducers: {
    addOrder: (state,action) => {
        state.push(action.payload)
    }
  }
});

export const {addOrder} = orderSlice.actions

export default orderSlice.reducer