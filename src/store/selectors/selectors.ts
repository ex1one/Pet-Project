import { TRootState } from "../index";

const selectors = {
  auth: (state: TRootState) => state.auth,
  signIn: (state: TRootState) => state.signIn,
};
export default selectors;
