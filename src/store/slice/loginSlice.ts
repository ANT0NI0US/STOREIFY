import { createSlice } from "@reduxjs/toolkit";
import {
  getUserByToken,
  sendResetPasswordEmail,
  signInFireBase,
  signInWithGoogle,
  signUpFirebase,
} from "../service/loginService";
import { loginServiceState } from "@/utils/types";

const storedToken =
  localStorage.getItem("token") || sessionStorage.getItem("token");
const storedIsAdmin =
  localStorage.getItem("isAdmin") || sessionStorage.getItem("isAdmin");

const initialState: loginServiceState = {
  isLoading: false,
  user: {},
  errors: null,
  isAdmin: storedIsAdmin === "true",
  isAuthenticated: !!storedToken && storedToken !== "undefined",
  token: storedToken || null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutUser: () => {
      window.localStorage.clear();
      window.sessionStorage.clear();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInFireBase.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.errors = null;
      })
      .addCase(signInFireBase.fulfilled, (state, action) => {
        const { type } = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
        state.isAdmin = type === "admin";
        state.user = action.payload;
      })
      .addCase(signInFireBase.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.errors = action.payload as string;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        const { type } = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
        state.isAdmin = type === "admin";
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload as string;
        state.isAuthenticated = false;
      })
      .addCase(signUpFirebase.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(signUpFirebase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload || {};
      })
      .addCase(signUpFirebase.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload as string;
      })
      .addCase(getUserByToken.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(getUserByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload || {};
      })
      .addCase(getUserByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload as string;
      })
      .addCase(sendResetPasswordEmail.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendResetPasswordEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload as string;
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
