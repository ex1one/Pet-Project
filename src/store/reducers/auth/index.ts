import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  user: null,
  token: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Authorization: (state, action: PayloadAction<IAuthState>) => {
      console.log(action.payload);
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { Authorization } = authReducer.actions;

export default authReducer.reducer;
