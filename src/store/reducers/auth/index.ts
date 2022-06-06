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
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { Authorization } = authReducer.actions;

export default authReducer.reducer;
