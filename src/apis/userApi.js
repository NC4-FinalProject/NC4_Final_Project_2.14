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
  async ({id, pw} , thunkAPI) => {
    try {
        console.log({id, pw});
      const response = await axios.post(`${API_URL}/user/sign-in`, {id, pw});

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);