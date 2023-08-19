
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../axiosInstant';
import axios from 'axios';

const initialState = {
  access: localStorage.getItem("access"), 
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
  loading: true,
};
export const check_auth= createAsyncThunk(
  'check_auth',
  async (thunkAPI) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ token: localStorage.getItem("access") });
      try{
        const result = await API.post("/auth/jwt/verify/", body, config);
        if (result.status===200){
          return result.data
        }else{
          return thunkAPI.rejectWithValue(result);
        }
      }catch(err){
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  }
)
export const register= createAsyncThunk(
  'register',
  async(email, name, password, re_password)=>{
    const config = {
      headers: {
          'Content-Type': 'application/json',
      }
  };

  const body = JSON.stringify({ email, name, password, re_password });

    const res = await axios.post('http://localhost:8000/auth/users/', body, config);
    if (res.status===201){
      return res.data
    }
  
  })

const userSlice=createSlice(
  {
    name:'user',
    initialState,
    reducer:{
     
    },
    extraReducers:(builder)=>{
      builder.addCase(check_auth.pending,(state)=>{
        state.isAuthenticated=null
        state.user=null
     })
     builder.addCase(check_auth.fulfilled,(state,action)=>{
      
      state.loading = false
      state.isAuthenticated = true
    })
    builder.addCase(check_auth.rejected,(state,action)=>{
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
          ...state,
          isAuthenticated: false,
          access: null,
          refresh: null
      }
    })
    builder.addCase(register.pending,(state)=>{
      return{ 
        ...state
      }
    })
    builder.addCase(register.fulfilled,(state,action)=>{
      state.isAuthenticated=true
      
    })
    builder.addCase(register.rejected,(state,action)=>{

        state.isAuthenticated= false
        state.user=null
    })

  }
    
})
export const{logoutSuccess}=userSlice.actions; 


const {reducer:userreducer}=userSlice;
export default userreducer