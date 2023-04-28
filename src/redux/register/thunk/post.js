import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerEndPoint } from '../../../api/api-end-point.js'
import registerService from '../services/register.service'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const register = createAsyncThunk(
  'auth-register',
  async (payload, thunkAPI) => {
    try {
      const response = await registerService.post(registerEndPoint, payload)
      console.log('response', response)

      if (response.status === 200 || response.status === 201) {
        toast.success("Registration Successfully !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
        window.location.href = '/'
        return response
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
