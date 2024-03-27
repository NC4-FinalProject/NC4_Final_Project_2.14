import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:9090"; // 백엔드 API 엔드포인트

export const signup = createAsyncThunk(
  "user/signup",
  async (user, thunkAPI) => {
    try {
        console.log(user);
      const response = await axios.post(`${API_URL}/user/sign-up`, user);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const signin = createAsyncThunk(
  "user/signin",
  async (user , thunkAPI) => {
    try {
        console.log(user);
      const response = await axios.post(`${API_URL}/user/sign-in`, user);

      sessionStorage.setItem("ACCESS_TOKEN", user.token);
      console.log(user.token)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const checkIdAvailability = createAsyncThunk(
  'user/checkIdAvailability',
  async (id, thunkAPI) => {
      try {
          const response = await axios.post(
              `/user/id-check`,
              { id }
          );

          return response.data.item;
      } catch(e) {
          return thunkAPI.rejectWithValue(e);
      }
  } 
);