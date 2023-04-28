import { createAsyncThunk } from '@reduxjs/toolkit'
import {loginEndPoint} from '../../../api/api-end-point.js'
import authService from '../services/auth.service.js'
import { toast } from 'react-toastify'
import { setToken } from '../../../utils/Helpers.js'
import "react-toastify/dist/ReactToastify.css";

export const login = createAsyncThunk(
  'auth-login',
  async (payload, thunkAPI) => {
    try {
      const response = await authService.post(loginEndPoint, payload)
      console.log("response", response)
      if (response.status === 200 || response.status === 201) {
        toast.success("Login Successfully !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setToken( response.data.jwtToken)
        window.location.href = '/dashboard'
        // return response.data
      } else {
        return thunkAPI.rejectWithValue(response.data)
      }
    
    } 
    catch (error) {
      toast.error("Login Failed ! Please Check Username & Password", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return thunkAPI.rejectWithValue(error)
    }
  }
)

