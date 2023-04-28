import { createAsyncThunk } from '@reduxjs/toolkit'
import dashboardService from '../services/dashboard.service'

export const dashboard = createAsyncThunk(
  'get-dashboard',
  async (payload, thunkAPI) => {
    try {
      const response = await dashboardService.get(payload)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

