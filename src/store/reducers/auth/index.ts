import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  user: null,
  jwt: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Authorization: (state, action: PayloadAction<IAuthState>) => {
      state.jwt = action.payload.jwt;
      state.user = action.payload.user;
    },
  },
});

export const { Authorization } = authReducer.actions;

export default authReducer.reducer;
