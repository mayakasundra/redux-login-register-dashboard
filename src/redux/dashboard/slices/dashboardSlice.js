import { createSlice } from '@reduxjs/toolkit'
import { dashboard } from '../thunk/get'

const initialState = {
  get: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    list: [],
  },
}

export const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: [],
  extraReducers: {
    // GET
    [dashboard.pending]: (state, action) => {
      state.get.isLoading = true
      state.get.isSuccess = false
      state.get.isError = false
    },
    [dashboard.fulfilled]: (state, action) => {
        console.log("dashboard action", action)
      state.get.list = action.payload.data
      state.get.isLoading = false
      state.get.isSuccess = true
      state.get.isError = false
    },
    [dashboard.rejected]: (state, action) => {
      state.get.isLoading = false
      state.get.isSuccess = false
      state.get.isError = true
      state.get.errorMessage = action.error
    },
  },
})

export const {} = dashboardSlice.actions
export default dashboardSlice.reducer
