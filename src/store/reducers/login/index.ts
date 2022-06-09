import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginState } from "./types";

const initialState: ILoginState = {
  accessToken: "",
  refreshToken: "",
  expires_in: 0,
};

const loginReducer = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<ILoginState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.expires_in = action.payload.expires_in;
    },
  },
});

export const { signIn } = loginReducer.actions;

export default loginReducer.reducer;
