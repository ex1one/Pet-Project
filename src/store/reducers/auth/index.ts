import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "./types";

const initialState: IAuthState = {
  user: null,
  isAuth: false,
  error: null,
  isLoading: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { auth } = authReducer.actions;

export default authReducer.reducer;
