import { createSlice } from '@reduxjs/toolkit'
import { login } from '../thunk/post'

const initialState = {
  post: {
    loginState: {
      errorMessage: '',
      isLoading: false,
      isSuccess: false,
      isError: false,
      user: false,
    
    },

  },
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: [],
  extraReducers: {
    // POST Login
    [login.pending]: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      state.post.loginState.isLoading = true
      state.post.loginState.isSuccess = false
  
    },
    [login.fulfilled]: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      state.post.loginState.user = action.payload
      state.post.loginState.isLoading = false
      state.post.loginState.isSuccess = true
      state.post.loginState.isError = false
      state.post.loginState.errorMessage = ''
    },
    [login.rejected]: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      state.post.loginState.isLoading = false
      state.post.loginState.isSuccess = false
      state.post.loginState.isError = true
      state.post.loginState.errorMessage = action.payload.response.data.message
    }
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions
export default authSlice.reducer
