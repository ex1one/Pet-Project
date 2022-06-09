import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import loginReducer from "./reducers/login";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signIn: loginReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
