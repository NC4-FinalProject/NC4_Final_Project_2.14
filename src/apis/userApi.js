import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:9090"; // 백엔드 API 엔드포인트

export const signup = createAsyncThunk(
  "user/signup",
  async (user, thunkAPI) => {
    try {
        // console.log(user);
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
        // console.log(user);
      const response = await axios.post(`${API_URL}/user/sign-in`, user);

      // sessionStorage.setItem("ACCESS_TOKEN", user.token);
      // console.log(user.token)
      return response.data.item;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signout = createAsyncThunk(
  "user/signout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/user/sign-out`, 
      {
        header: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
        }
      });

      return response.data.item;
    } catch(e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)

export const uploadProfileImage = createAsyncThunk(
  "user/uploadProfileImage",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(`${API_URL}/user/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteProfileImage = createAsyncThunk(
  "user/deleteProfileImage",
  async (_, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/user/delete`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateProfileImage = createAsyncThunk(
  "user/updateProfileImage",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.put(`${API_URL}/user/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);