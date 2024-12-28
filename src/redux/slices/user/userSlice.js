import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/api";
import { postEstablishement } from "../myEstablishement/myEstablishementActions";
import { getUser } from "../users/usersAction";
import {toast} from "react-toastify";

// Define your token
const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}

export const signup = createAsyncThunk(
  "users/signup",
  async ({ user }, { rejectWithValue }) => {
    try {

      const response = await axios.post(`${BASE_URL}/signup`, {
        user,
      });

      if (response.status !== 200) {
        return rejectWithValue("Impossible d'inscrire l'utilisateur");
      }

      const data = response.data.data;
      localStorage.setItem("currentUser", JSON.stringify(data.current_user));
      localStorage.setItem("token", data.token);

      // Set the Authorization header globally
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "users/login",
  async ({ user }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        user,
      });

      if (response.status !== 200)
      {
        return rejectWithValue(
            response.data ? response.data : "Une erreur est survenue, veuillez réessayer !"
        );
      }

      const data = response.data.status.data;
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // Set the Authorization header globally
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      return response.data.status.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Une erreur est survenue, veuillez réessayer !"
      );
    }
  }
);

// export const logout = createAsyncThunk(
//   "users/logout",
//   async ({ token }, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(`${BASE_URL}/logout`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (response.status !== 200 || response.status !== 401)
//         return rejectWithValue("Couldn't logout");
//       return true;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  token: localStorage.getItem("token") || null,
  isPending: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      return { ...state, currentUser: null, token: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      return { ...state, isPending: true };
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      return {
        ...state,
        currentUser: payload.user,
        token: payload.token,
        isPending: false,
      };
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      toast.error(payload);
      return { ...state, isPending: false };
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      return {
        ...state,
        currentUser: payload.current_user,
        token: payload.token,
      };
    });
    builder.addCase(postEstablishement.fulfilled, (state) => {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...state.currentUser, is_employed: true })
      );
      return {
        ...state,
        currentUser: { ...state.currentUser, is_employed: true },
      };
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      if (state.currentUser.id !== payload.user.id) return;
      localStorage.setItem("currentUser", JSON.stringify(payload.user));
      return { ...state, currentUser: payload.currentUser };
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
