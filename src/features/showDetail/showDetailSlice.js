import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

const showDetailSlice = createSlice({
  name: 'showDetail',
  initialState,
  reducers: {
    setShowDetail: (state) => !state,
  }
});

export const {setShowDetail} = showDetailSlice.actions

export default showDetailSlice.reducer