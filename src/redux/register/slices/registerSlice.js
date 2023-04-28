import { createSlice } from '@reduxjs/toolkit'
import { register } from '../thunk/post'

const initialState = {
  post: {
    registerState: {
      errorMessage: '',
      isLoading: false,
      isSuccess: false,
      isError: false,
      user: false,
    
    },

  },
}

export const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: [],
  extraReducers: {
    // POST register
    [register.pending]: (state, action) => {
      state.post.registerState.isLoading = true
      state.post.registerState.isSuccess = false
    //   state.post.registerState.isError = false
    //   state.post.registerState.errorMessage = ''
    },
    [register.fulfilled]: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      state.post.registerState.user = action.payload
    //   state.post.registerState.isAuthenticated = true
    //   state.post.registerState.isLoading = false
    //   state.post.registerState.isSuccess = true
    //   state.post.registerState.isError = false
    //   state.post.registerState.errorMessage = ''
    },
    [register.rejected]: (state, action) => {
      state.post.registerState.isLoading = false
      state.post.registerState.isSuccess = false
      state.post.registerState.isError = true
      state.post.registerState.errorMessage = action.payload.response.data.message
    }
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = registerSlice.actions
export default registerSlice.reducer
