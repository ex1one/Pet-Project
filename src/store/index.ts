import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
